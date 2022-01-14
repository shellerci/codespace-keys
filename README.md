# Sync Codespace Keys ⛔️ (non-functional, don't use this)

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
Retrieved codespace repositories for custominkcustomink/xxxxxx, customink/xxxxxx, etc....
Retrieved codespace keys XX_XXX_XXXXX1,XX_XXX_XXXXX2,XX_XXX_XXXXX3,XX_XXX_XXXXX4,XX_XXX_XXXXX5,XX_XXX_XXXXX6,XX_XXX_XXXXX7
Retrieved existing permissions for XX_XXX_XXXXX1 11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111
Retrieved existing permissions for XX_XXX_XXXXX2 11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111
Retrieved existing permissions for XX_XXX_XXXXX3 11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111
Retrieved existing permissions for XX_XXX_XXXXX4 11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111
Retrieved existing permissions for XX_XXX_XXXXX5 11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111
Retrieved existing permissions for XX_XXX_XXXXX6 11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111
Retrieved existing permissions for XX_XXX_XXXXX7 11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111,11111
Successfully set permissions for XX_XXX_XXXXX1
Successfully set permissions for XX_XXX_XXXXX2
Successfully set permissions for XX_XXX_XXXXX3
Successfully set permissions for XX_XXX_XXXXX4
Successfully set permissions for XX_XXX_XXXXX5
Successfully set permissions for XX_XXX_XXXXX6
Successfully set permissions for XX_XXX_XXXXX7
```

Aaaaand, you're all authorized
