# Sync Codespace Keys ⛔️ Not Functional As An Action, DO NOT USE IT AS AN ACTION

As the number of codespaces enabled projects in your organization grows, making sure that they all are enabled able to access the codespace secrets needed to function becomes increasingly tedious. 

This is an action designed to automate that process by scanning your organization for all repositories with a devcontainer.json file, and giving those repos access to your secrets. You can define a list of secrets you want to share globally, or specify the keys you want shared

# Unless...
This does work perfectly well on the command line.. Just

- pull it down
- run npm install
- copy .env.example to .env
- update the pat field with your token
- update the organization field with your orgname
- run index.js
```
Retrieved codespace repositories for orgname/repoId_11111, orgname/repoId_22222, orgname/repoId_33333 etc....
Retrieved codespace keys SECRET_1,SECRET_2,SECRET_3,SECRET_4,SECRET_5,SECRET_6,SECRET_7
Retrieved existing permissions for SECRET_1 11111,22222,33333,44444,55555,66666,77777,88888
Retrieved existing permissions for SECRET_2 11111,22222,33333,44444,55555,66666,77777,88888
Retrieved existing permissions for SECRET_3 11111,22222,33333,44444,55555,66666,77777,88888
Retrieved existing permissions for SECRET_4 11111,22222,33333,44444,55555,66666,77777,88888
Retrieved existing permissions for SECRET_5 11111,22222,33333,44444,55555,66666,77777,88888
Retrieved existing permissions for SECRET_6 11111,22222,33333,44444,55555,66666,77777,88888
Retrieved existing permissions for SECRET_7 11111,22222,33333,44444,55555,66666,77777,88888
Successfully set permissions for SECRET_1
Successfully set permissions for SECRET_2
Successfully set permissions for SECRET_3
Successfully set permissions for SECRET_4
Successfully set permissions for SECRET_5
Successfully set permissions for SECRET_6
Successfully set permissions for SECRET_7
```

Aaaaand, you're all authorized
