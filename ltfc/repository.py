from datetime import datetime
from typing import List

import requests

from commit import Commit
from release import Release


class Repository:
    
    def __init__(self, session: requests.Session, data: requests.Response.json) -> None:
        self.__session = session

        # Create variables from the data dictionary.
        for key, value in data.items():
            # In order to create a private variable through setattr then we have to also use the class name. 
            # Valid Example: _Repository__repository
            # Invalid Example: __repository
            setattr(self, f"_{self.__class__.__name__}__{key}", value)

    def get_full_name(self) -> str:
        return self.__full_name

    def get_creation_time(self) -> datetime.strptime:
        return datetime.strptime(self.__created_at, "%Y-%m-%dT%XZ")

    def get_commits(self) -> List[Commit]:
        response = self.__session.get(url=self.__commits_url.replace("{/sha}", ""))
        return [Commit(data=data) for data in response.json()]

    def get_releases(self) -> List[Release]:
        response = self.__session.get(url=self.__releases_url.replace("{/id}", ""))
        return [Release(session=self.__session, data=data) for data in response.json()]

    def get_latest_release(self) -> Release:
        response = self.__session.get(url=self.__releases_url.replace("{/id}", "/latest"))
        
        if ("message" in response.json() and
                response.json()["message"] == "Not Found"):
                raise NameError("There are no releases on the chosen repository.")

        return Release(session=self.__session, data=response.json())
