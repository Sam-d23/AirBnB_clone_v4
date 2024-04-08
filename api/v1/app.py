# Import the CORS module
from flask_cors import CORS
# Update the CORS settings
CORS(app, resources={r"/api/v1/*": {"origins": "*"}})
