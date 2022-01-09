# Sync Codespace Keys

As the number of codespaces enabled projects in your organization grows, making sure that they all are enabled able to access the codespace secrets needed to function becomes increasingly tedious. 

This is an action designed to automate that process by scanning your organization for all repositories with a devcontainer.json file, and giving those repos access to your secrets. You can define a list of secrets you want to share globally, or specify the keys you want shared
