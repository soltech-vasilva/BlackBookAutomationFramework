###################################
# SetUp  ONE TIME ONLY            #
###################################

Feature:  "SetUp"

  Rules: Make sure all settings are set before running regression test.

  Background:

    Given I enter BlackBook Login Website
    #ADDED THIS TO CONTINUE TEST CASES
    And I reload "LogIn" page
    And I enter my user email address all@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button

#####################################################################################################################
#                                                Setup                                                              #
#####################################################################################################################

  @Setup
  Scenario: "Setup Roles"
   # And I wait
#    ########################################
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    #Delete Role - DefaultPermissions
#    And I click on Gear Icon 3 "DefaultPermissions"
#    And I click Edit from Gear Icon "in Role List"
#    #Disable -  User
#    And I enter "default@example.com" on Filter Users in Role Editor
#    And I click checkbox on first user found from Filter Users in Role Editor
#    And I click on Save button in Role Editor
#    And I click Edit Button in Edit Roles
#    And I click on Delete button in Role Editor
#    And I click "Confirm" Button for modal warning message from Edit Roles
#      Then I should see "The Role has been successfully deleted" displayed on "EditRoles" popup
    ########################################
    #Delete Role - FeaturePermissions
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on Gear Icon 4 "FeaturePermissions"
    And I click Edit from Gear Icon "in Role List"
    #Disable -  User
    And I enter "feature@example.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
    And I click X on Message Popup in "Role Editor"
    And I click Edit Button in Edit Roles
    And I click on Delete button in Role Editor
    And I click "Confirm" Button for modal warning message from Edit Roles
     # Then I should see "The Role has been successfully deleted" displayed on "EditRoles" popup
    ########################################
    #Editing Role - Administrator
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on Gear Icon 1 "Administrator in Role List"
    And I click Edit from Gear Icon "in Role List"
    #Enable USER permission
    And I click Filter By Group dropdown "Users" Permissions in Role Editor
    And I enter "update other user's roles" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - Update other user's roles" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I enter "Update other user's profile" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - Update other user's profile" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I enter "Update other user's active" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - Update other user's active" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
#    And I enter "View user" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Unchecked - View user" Permission row in Role Editor
    #Disable user
    And I enter "admin@example.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I clear text box selected "FilterUsers" in Role Editor
    And I click on Save button in Role Editor
    And I click X on Message Popup in "Role Editor"
      #Then I should see "Role successfully updated" displayed on "EditRoles" popup
    ########################################
    #Create new Role Editor-Full-User
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on Gear Icon 3 "Editor in Role List"
    And I click Edit from Gear Icon "in Role List"
    And I clear text box selected "RoleName" in Role Editor
    And I enter Role Name "Editor-Full-User"
    #Enable USER permission
    And I click Filter By Group dropdown "Activities" Permissions in Role Editor
    And I enter "List user's own activities" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - List user's own activities" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I click Filter By Group dropdown "Users" Permissions in Role Editor
    And I enter "Create and update users" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Check - Create and update users" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I enter "Update other user's password" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Check - Update other user's password" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I enter "Update other user's roles" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Check - Update other user's roles" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I enter "Update other user's profile" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Check - Update other user's profile" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I enter "Update other user's active" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Check - Update other user's active" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    #Disable USER permission
#    And I click Filter By Group dropdown "Users" Permissions in Role Editor
#    And I enter "View user" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Unchecked - View user" Permission row in Role Editor
    #Disable user
    And I enter "editor@example.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I clear text box selected "FilterUsers" in Role Editor
    #Enable user
    And I enter "user1@example.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I clear text box selected "FilterUsers" in Role Editor
    And I click on Save button in Role Editor
    And I click X on Message Popup in "Role Editor"
      #Then I should see "Role successfully updated" displayed on "EditRoles" popup
    ########################################
    #Create new Role "Basic Role-No Permissions"
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on New Role Button in Role List
    And I enter Role Name ""
    And I enter Role Name "Basic Role-No Permissions"
    And I select Role Market "US Used Car" in Role Editor
     #Enable user
    And I enter "none@example.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
    And I click X on Message Popup in "Role Editor"
     # Then I should see "Role has been successfully added" displayed on "EditRoles" popup
    ########################################
     #Create new Role "Basic My Profile edit Permissions"
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on New Role Button in Role List
    And I enter Role Name ""
    And I enter Role Name "Basic My Profile edit Permissions"
    #Enable USER permission
    And I click Filter By Group dropdown "Activities" Permissions in Role Editor
    And I enter "List user's own activities" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - List user's own activities" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I click Filter By Group dropdown "Users" Permissions in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I enter "Update other user's profile" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - Update other user's profile" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I enter "Update other user's password" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - Update other user's password" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I enter "Update users" on Filter Permissions in Role Editor
    And I click checkbox  "2" "Checked - Update users" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I select Role Market "US Used Car" in Role Editor
    #Enable user
    And I enter "user2@example.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
    And I click X on Message Popup in "Role Editor"
      #  Then I should see "Role has been successfully added" displayed on "EditRoles" popup
    ########################################
    #Create new Role "Editor-Full-Roles"
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on New Role Button in Role List
    And I enter Role Name ""
    And I enter Role Name "Editor-Full-Roles"
    And I select Role Market "US Used Car" in Role Editor
     #Enable USER permission
    And I click Filter By Group dropdown "Activities" Permissions in Role Editor
    And I enter "List user's own activities" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - List user's own activities" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I click Filter By Group dropdown "Roles" Permissions in Role Editor
    And I click checkbox  "0" "Roles" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I click Filter By Group dropdown "Users" Permissions in Role Editor
    And I enter "View user list" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - View user list" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I enter "View and update user's own profile" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - View and update user's own profile" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    #added profile to work
    And I enter "Update other user's profile" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - Update other user's profile" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I enter "Update other user's password" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - Update other user's password" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I enter "Update users" on Filter Permissions in Role Editor
    And I click checkbox  "2" "Checked - Update users" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
     #Enable user
    And I enter "editor@example.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
    And I click X on Message Popup in "Role Editor"
      #Then I should see "Role has been successfully added" displayed on "EditRoles" popup
    ########################################
     #Create new Role "Setting-Only"
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on New Role Button in Role List
    And I enter Role Name ""
    And I enter Role Name "Setting-Only"
    And I select Role Market "US Used Car" in Role Editor
    #Enable USER permission
    And I enter "Setting" on Filter Permissions in Role Editor
    And I click checkbox  "0" "Setting" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I click Filter By Group dropdown "Activities" Permissions in Role Editor
    And I enter "List user's own activities" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - List user's own activities" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I click Filter By Group dropdown "Users" Permissions in Role Editor
    And I enter "View and update user's own profile" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - View and update user's own profile" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    #added profile to work
    And I enter "Update other user's profile" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - Update other user's profile" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I enter "Update other user's password" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Checked - Update other user's password" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I enter "Update users" on Filter Permissions in Role Editor
    And I click checkbox  "2" "Checked - Update users" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    #Enable user
    And I enter "admin@example.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
    And I click X on Message Popup in "Role Editor"
      #Then I should see "Role has been successfully added" displayed on "EditRoles" popup
    ########################################
    #USER 1 edit first name
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I enter Filter User List user1@example.com in User List
    And I click on Gear Icon 1 "user1@example.com in User List"
    And I click Edit from Gear Icon "in User List"
    And I clear text box selected "firstName" in User Profile
    And I enter my first name user1 in Form
    And I click on Save button in Edit User Profile
    And I click X on Message Popup in "Role Editor"
    ########################################
    #USER 2 edit first name
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I enter Filter User List user2@example.com in User List
    And I click on Gear Icon 1 "user2@example.com in User List"
    And I click Edit from Gear Icon "in User List"
    And I clear text box selected "firstName" in User Profile
    And I enter my first name user2 in Form
    And I click on Save button in Edit User Profile
    And I click X on Message Popup in "Role Editor"
    ########################################
     #USER 3 edit first name
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I enter Filter User List user3@example.com in User List
    And I click on Gear Icon 1 "user3@example.com in User List"
    And I click Edit from Gear Icon "in User List"
    And I clear text box selected "firstName" in User Profile
    And I enter my first name user3 in Form
    And I click on Save button in Edit User Profile
    And I click X on Message Popup in "Role Editor"
     ########################################
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar