from fastapi import HTTPException
from ..models.user import User


_user_id = 1
_users: dict[str, User] = {}

class UserService:

    def reset(self):
        global _users
        _users = {}
    
    def get_users(self) -> list[User]:
        global _users
        return _users.values()
    
    def get_user(self, email: str) -> User:

        if email not in _users:
            raise HTTPException(
                status_code=404, detail=f"Invalid email {email}: User does not exist."
            )
        return _users[email]

    def create_user(self, user: User) -> User:
        """Stores a user in the data store.

        Args:
            user: user to store.
        Returns:
            User: Created user.
        """
        global _users
        _users[user.email] = user
        return user

    def update_user(self, user: User) -> User:
        """Modifies one user in the data store.

        Args:
            user: Data for a user with modified values.
        Returns:
            user: Updated user.
        Raises:
            HTTPException: user does not exist.
        """
        # TODO: Implement this service function. To do this successfully, you must:
        # - Update the correct user in the backend.
        # - Throw the correct exception if the user tries to edit a user that does not exist.
        # - Return the updated user.
        global _users
        if user.email not in _users:
            raise HTTPException(
                status_code=404, detail=f"Invalid email {user.email}: user does not exist."
            )
        _users[user.email] = user
        return user

    def delete_user(self, email: int) -> None:
        """Deletes one user from the data store.

        Args:
            user_id: ID of the user to delete.
        Raises:
            HTTPException: user does not exist.
        """
        global _users

        if email not in _users:
            raise HTTPException(
                status_code=404, detail=f"Invalid email {email}: user does not exist."
            )
        del _users[email]

        