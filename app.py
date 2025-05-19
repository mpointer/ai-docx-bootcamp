from flask import Flask, render_template, send_from_directory, redirect, url_for
import os
import json
import markdown
import logging

app = Flask(__name__)
logging.basicConfig(level=logging.DEBUG)

# Configuration
app.config['MODULE_FOLDER'] = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'modules')
app.config['ASSETS_FOLDER'] = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'assets')

# Create templates and static directories if they don't exist
os.makedirs(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'templates'), exist_ok=True)
os.makedirs(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static'), exist_ok=True)

# Load module data
def load_modules():
    try:
        with open(os.path.join(app.config['MODULE_FOLDER'], 'modules.json'), 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        app.logger.error("modules.json not found")
        return {"modules": []}
    except Exception as e:
        app.logger.error(f"Error loading modules: {str(e)}")
        return {"modules": []}

@app.route('/')
def index():
    app.logger.info("Loading index page")
    modules = load_modules()
    return render_template('index.html', modules=modules['modules'])

@app.route('/module/<module_id>')
def module(module_id):
    app.logger.info(f"Loading module: {module_id}")
    modules = load_modules()
    current_module = next((m for m in modules['modules'] if m['id'] == module_id), None)
    
    if not current_module:
        app.logger.warning(f"Module not found: {module_id}")
        return redirect(url_for('index'))
    
    # Load module content
    try:
        with open(os.path.join(app.config['MODULE_FOLDER'], f"{module_id}.md"), 'r') as f:
            content = f.read()
            html_content = markdown.markdown(content, extensions=['extra', 'codehilite'])
    except FileNotFoundError:
        app.logger.warning(f"Module content file not found: {module_id}.md")
        html_content = "<p>Module content is being developed.</p>"
    except Exception as e:
        app.logger.error(f"Error loading module content: {str(e)}")
        html_content = f"<p>Error loading module content: {str(e)}</p>"
    
    return render_template('module.html', module=current_module, content=html_content)

@app.route('/assets/<path:filename>')
def assets(filename):
    return send_from_directory(app.config['ASSETS_FOLDER'], filename)

@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory('static', filename)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
