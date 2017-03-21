###################################
# SetUp  ONE TIME ONLY            #
###################################

Feature:  "SetUp"

  Rules: Make sure all settings are set before running regression test.

  Background:

    Given I enter BlackBook Login Website
    And I wait
         #BUG ADDED THIS TO CONTINUE
         ## bug that bypasses login happens only in desktop catches issues (it thinks is login) , browserstack works fine
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
      #And I check value on textbox
    And I enter my user email address user1@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait

#####################################################################################################################
#                                                Setup                                                              #
#####################################################################################################################

  @Setup
  Scenario: "Setup Roles"
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    #Administrator Role Edit
    And I click on Gear Icon 1 "Administrator in Role List"
    And I click Edit from Gear Icon "in Role List"
    And I wait
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And I wait
    And I enter "can assign users roles" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "1" "Can Assign Users Roles" Permission row in Role Editor
    And I enter "admin@example.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I clear text box selected "FilterUsers" in Role Editor
    And I wait
    And I click on Save button in Role Editor
      Then I should see "Role successfully updated" displayed on "EditRoles" popup
    And I wait
    #Editor-Full-User
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on Gear Icon 3 "Editor in Role List"
    And I click Edit from Gear Icon "in Role List"
    And I wait
    And I clear text box selected "RoleName" in Role Editor
    And I enter Role Name "Editor-Full-User"
    #Enable
         #Remmeber to add permission "CanAssignedUserRoles","CanAdd/EditUser","CanResetUsersPasswords","CanViewOtherUsers","CanViewUserList", "CanAdd/EditRoles","CanViewRoleList"
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And I wait
    And I enter "Can Add/Edit User" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "1" "Can Add/Edit User" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
    And I enter "Can Reset Users Passwords" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "1" "Can Reset Users Passwords" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
    And I enter "Can View Other Users" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "1" "Can View Other Users" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
    And I click Filter By Group dropdown "Roles" Permissions in Role Editor
    And I wait
    And I enter "Can Add/Edit Roles" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "1" "Can Add/Edit Roles" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And I wait
    And I enter "Can Assign Users Roles" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "1" "Can Assign Users Roles" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
    #Disable
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And I wait
    And I enter "Can View Other Users Profiles" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "1" "Can View Other Users Profiles" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
    #Disable user
    And I enter "editor@example.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I clear text box selected "FilterUsers" in Role Editor
    And I wait
    #enable user
    And I enter "user1@example.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I clear text box selected "FilterUsers" in Role Editor
    And I wait
    And I click on Save button in Role Editor
      Then I should see "Role successfully updated" displayed on "EditRoles" popup
    And I wait
    #Create new Role "Basic Role-No Permissions"
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on New Role Button in Role List
    And I enter Role Name ""
    And I enter Role Name "Basic Role-No Permissions"
    And I select Role Market "US Used Car" in Role Editor
    And I wait
    And I enter "user2@example.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I wait
    And I click on Save button in Role Editor
      Then I should see "Role has been successfully added" displayed on "EditRoles" popup
    And I wait
    #Create new Role "Editor-Full-Roles"
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on New Role Button in Role List
    And I enter Role Name ""
    And I enter Role Name "Editor-Full-Roles"
    And I select Role Market "US Used Car" in Role Editor
    And I wait
    And I enter "editor@example.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I wait
    And I click Filter By Group dropdown "Roles" Permissions in Role Editor
    And I wait
    And I click checkbox  "0" "Roles" Permission row in Role Editor
    And I wait
    And I clear text box selected "FilterPermissions" in Role Editor
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And I wait
    And I enter "Can view User List" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "1" "Can view User List" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
    And I click on Save button in Role Editor
      Then I should see "Role has been successfully added" displayed on "EditRoles" popup
    And I wait
     #Create new Role "Setting-Only"
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on New Role Button in Role List
    And I enter Role Name ""
    And I enter Role Name "Setting-Only"
    And I select Role Market "US Used Car" in Role Editor
    And I wait
    And I enter "admin@example.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I wait
    And I enter "Setting" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "0" "Setting" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
    And I click on Save button in Role Editor
    Then I should see "Role has been successfully added" displayed on "EditRoles" popup
    And I wait
    #USER 1 edit first name
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I enter Filter User List user1@example.com in User List
    And I click on Gear Icon 1 "user1@example.com in User List"
    And I click Edit from Gear Icon "in User List"
    And I clear text box selected "firstName" in User Profile
    And I enter my first name user1 in Form
    And I click on Save button in Edit User Profile
   #USER 2 edit first name
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I enter Filter User List user2@example.com in User List
    And I click on Gear Icon 1 "user2@example.com in User List"
    And I click Edit from Gear Icon "in User List"
    And I clear text box selected "firstName" in User Profile
    And I enter my first name user2 in Form
    And I click on Save button in Edit User Profile
     #USER 3 edit first name
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I enter Filter User List user3@example.com in User List
    And I click on Gear Icon 1 "user3@example.com in User List"
    And I click Edit from Gear Icon "in User List"
    And I clear text box selected "firstName" in User Profile
    And I enter my first name user3 in Form
    And I click on Save button in Edit User Profile
    And I wait