from datetime import datetime

import requests


class Commit:

    def __init__(self, data: requests.Response.json) -> None:
        # Create variables from the data dictionary.
        for key, value in data.items():
            # In order to create a private variable through setattr then we have to also use the class name. 
            # Valid Example: _Commit__commit
            # Invalid Example: __commit
            setattr(self, f"_{self.__class__.__name__}__{key}", value)
        
    def get_date(self) -> datetime.strptime:
        return datetime.strptime(self.__commit["committer"]["date"], "%Y-%m-%dT%XZ")