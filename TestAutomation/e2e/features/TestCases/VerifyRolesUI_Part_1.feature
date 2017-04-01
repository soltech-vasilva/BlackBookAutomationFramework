###################################
#       Verify Roles UI           #
###################################

Feature:  "Verify each Role UI"

  Rules: Each role have different permission enable and things get disable or hidden in UI.

  Question:

  Background:
  Given I enter BlackBook Login Website
     #BUG ADDED THIS TO CONTINUE
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
      Then I verify BlackBook "Login" page with Applitools
    And I wait
#######################################################################################################################
#                                            Administration                                                           #
#######################################################################################################################

  @TC_CheckRoles_UI_A
  Scenario Outline: "@TC_CheckRoles_UI_A" Verify "Administration" Role UI.(After Setup)
     #(BB-726),(BB-725)(BB-588)(BB-471 p-2) (BB-732) (BB-734)
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button
      Then I verify BlackBook "Home" page with Applitools
    #ROLES
    And I click on Admin Tab
      Then I verify BlackBook "Admin Tab-Submenu (Administartor Account)" page with Applitools
    And I click on Roles submenu from Admin Tab
      Then I verify BlackBook "Role List" page with Applitools
    And I click on Gear Icon 1 "Administrator in Role List"
      Then I verify BlackBook "Gear Icon-Submenus in Role List" page with Applitools
    And I click 1 View from Gear Icon in Role List
      Then I verify BlackBook "View Administration Role" page with Applitools
    And I click Edit Button in Edit Roles
      Then I verify BlackBook "Edit Administration Role" page with Applitools
    And I click on Save button in Role Editor
      Then I verify BlackBook "Save Administration Role message" page with Applitools
    And I click Reset Button in Edit Roles
      Then I verify BlackBook "Reset Administration Role" page with Applitools
    And I click Cancel Button from Edit Roles
      Then I verify BlackBook "Role List" page with Applitools
    And I click on Gear Icon 1 "Administrator in Role List"
    And I click Edit from Gear Icon "in Role List"
      Then I verify BlackBook "Edit Administration Role" page with Applitools
    And I click Cancel Button from Edit Roles
      Then I verify BlackBook "Role List" page with Applitools
    And I click on New Role Button in Role List
      Then I verify BlackBook "Add New Role" page with Applitools
    And I click Reset Button in Edit Roles
      Then I verify BlackBook "Reset Administration Role" page with Applitools
    And I click Cancel Button from Edit Roles
    Then I verify BlackBook "Role List" page with Applitools
    #USER
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
      Then I verify BlackBook "User List" page with Applitools
    And I click on Gear Icon 1 "USER none@example.com in User List"
      Then I verify BlackBook "Gear Icon-Submenus in User List" page with Applitools
    And I click 1 View from Gear Icon in User List
      Then I verify BlackBook "View User Profile none@example.com with NO ROLE" page with Applitools
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I click on Gear Icon 2 "USER all@example.com in User List"
    And I click 2 View from Gear Icon in User List
      Then I verify BlackBook "View User Profile all@example.com with ROLE" page with Applitools
    And I click Edit Button in Edit User Profile
      Then I verify BlackBook "Edit User Profile all@example.com" page with Applitools
    And I click on Save button in Edit User Profile
      Then I verify BlackBook "Save User Profile all@example.com message" page with Applitools
    And I click Reset Button in Edit User Profile
      Then I verify BlackBook "Reset User Profile" page with Applitools
    And I click Cancel Button in Edit User Profile
      Then I verify BlackBook "User List" page with Applitools
    And I click on Gear Icon 2 "USER all@example.com in User List"
    And I click Deactivate in submenu from Gear Icon
      Then I verify BlackBook "Should Not see USER all@example.com (Deactivate) in User List" page with Applitools
    And I click All in submenu from Status FilterValue
     Then I verify BlackBook "All active and Inactive Users in User List" page with Applitools
    And I click Inactive in submenu from Status FilterValue
      Then I verify BlackBook "Inactive USER all@example.com in User List" page with Applitools
    And I click on Gear Icon 1 "USER all@example.com in User List"
    And I click Activate in submenu from Gear Icon
      Then I verify BlackBook "Should Not see USER all@example.com (Activate) in User List" page with Applitools
    And I click Active in submenu from Status FilterValue
      Then I verify BlackBook "User List" page with Applitools
    And I click on New User Button in User List
      Then I verify BlackBook "Add New User" page with Applitools
    And I click Cancel Button in Edit User Profile
      Then I verify BlackBook "User List" page with Applitools
    #SETTINGS
    And I click on Admin Tab
    And I click on Settings submenu from Admin Tab
     Then I verify BlackBook "Settings" page with Applitools
    #SEGMENTS need more
    #AVATAR
    And I click Avatar Image Button
      Then I verify BlackBook "Avatar button-Submenu" page with Applitools
    And I click My Profile sub menu from Avatar
      Then I verify BlackBook "View My Profile" page with Applitools
    And I click Edit Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click on Save button in Edit User Profile
      Then I verify BlackBook "Save User Profile user1@example.com message" page with Applitools
    And I click Reset Button in Edit User Profile
      Then I verify BlackBook "Reset My Profile" page with Applitools
    And I click Cancel Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait
      Then I verify BlackBook "Login" page with Applitools
    And I wait

    Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | user1@example.com               |   Password1        |


#######################################################################################################################
#                                            Basic Role-No Permissions                                                #
#######################################################################################################################

  @TC_CheckRoles_UI_B
  Scenario Outline: "@TC_CheckRoles_UI_B" Verify "Basic Role-No Permissions" Role UI.(After Setup)
    #(BB-471 p-1) (BB-723)
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button
      Then I verify BlackBook "Home" page with Applitools
    #AVATAR
    And I click Avatar Image Button
      Then I verify BlackBook "Avatar button-Submenu" page with Applitools
    And I click My Profile sub menu from Avatar
      Then I verify BlackBook "View My Profile" page with Applitools
    And I click Edit Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click on Save button in Edit User Profile
      Then I verify BlackBook "Save User Profile user2@example.com message" page with Applitools
    And I click Reset Button in Edit User Profile
      Then I verify BlackBook "Reset My Profile" page with Applitools
    And I click Cancel Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait
      Then I verify BlackBook "Login" page with Applitools
    And I wait

Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | user2@example.com               |   Password1        |


#######################################################################################################################
#                                            Editor-Full-User                                                         #
#######################################################################################################################

 @TC_CheckRoles_UI_C
  Scenario Outline: "@TC_CheckRoles_UI_C" Verify "Editor-Full-User" Role UI.(After Setup)
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button
      Then I verify BlackBook "Home" page with Applitools
    #ROLES
    And I click on Admin Tab
      Then I verify BlackBook "Admin Tab-Submenu (Editor-Full-User Account)" page with Applitools
    And I click on Roles submenu from Admin Tab
      Then I verify BlackBook "Role List" page with Applitools
    #USER need more
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
      Then I verify BlackBook "User List" page with Applitools
    And I click on Gear Icon 1 "USER none@example.com in User List"
      Then I verify BlackBook "Gear Icon-Submenus in User List" page with Applitools
    And I click 1 View from Gear Icon in User List
      Then I verify BlackBook "View User Profile none@example.com with NO ROLE" page with Applitools
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I click on Gear Icon 2 "USER all@example.com in User List"
    And I click 2 View from Gear Icon in User List
      Then I verify BlackBook "View User Profile all@example.com with ROLE" page with Applitools
    And I click Edit Button in Edit User Profile
      Then I verify BlackBook "Edit User Profile all@example.com" page with Applitools
    And I click on Save button in Edit User Profile
      Then I verify BlackBook "Save User Profile all@example.com message" page with Applitools
    And I click Reset Button in Edit User Profile
      Then I verify BlackBook "Reset User Profile" page with Applitools
    And I click Cancel Button in Edit User Profile
      Then I verify BlackBook "User List" page with Applitools
    And I click on Gear Icon 2 "USER all@example.com in User List"
    And I click Deactivate in submenu from Gear Icon
      Then I verify BlackBook "Should Not see USER all@example.com (Deactivate) in User List" page with Applitools
    And I click All in submenu from Status FilterValue
     Then I verify BlackBook "All active and Inactive Users in User List" page with Applitools
    And I click Inactive in submenu from Status FilterValue
      Then I verify BlackBook "Inactive USER all@example.com in User List" page with Applitools
    And I click on Gear Icon 1 "USER all@example.com in User List"
    And I click Activate in submenu from Gear Icon
      Then I verify BlackBook "All active Users in User List" page with Applitools
    And I click Active in submenu from Status FilterValue
      Then I verify BlackBook "Should Not see USER all@example.com (Activate) in User List" page with Applitools
    And I click on New User Button in User List
      Then I verify BlackBook "Add New User" page with Applitools
    And I click Cancel Button in Edit User Profile
      Then I verify BlackBook "User List" page with Applitools
    #SEGMENTS need more
    #AVATAR
    And I click Avatar Image Button
      Then I verify BlackBook "Avatar button-Submenu" page with Applitools
    And I click My Profile sub menu from Avatar
      Then I verify BlackBook "View My Profile" page with Applitools
    And I click Edit Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
   And I click on Save button in Edit User Profile
      Then I verify BlackBook "Save User Profile user3@example.com message" page with Applitools
    And I click Reset Button in Edit User Profile
      Then I verify BlackBook "Reset My Profile" page with Applitools
    And I click Cancel Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
   And I wait
      Then I verify BlackBook "Login" page with Applitools
    And I wait

    Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | user3@example.com               |   Password1        |

#######################################################################################################################
#                                          Editor-Full-Roles                                                          #
#######################################################################################################################

  @TC_CheckRoles_UI_D
  Scenario Outline: "@TC_CheckRoles_UI_D" Verify "Editor-Full-Roles" Role UI.(After Setup)
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button
      Then I verify BlackBook "Home" page with Applitools
    #ROLES
    And I click on Admin Tab
      Then I verify BlackBook "Admin Tab-Submenu (Editor-Full-Roles Account)" page with Applitools
    And I click on Roles submenu from Admin Tab
      Then I verify BlackBook "Role List" page with Applitools
    And I click on Gear Icon 1 "Administrator in Role List"
      Then I verify BlackBook "Gear Icon-Submenus in Role List" page with Applitools
    And I click 1 View from Gear Icon in Role List
      Then I verify BlackBook "View Administration Role" page with Applitools
    And I click Edit Button in Edit Roles
      Then I verify BlackBook "Edit Administration Role" page with Applitools
    And I click on Save button in Role Editor
      Then I verify BlackBook "Save Administration Role message" page with Applitools
    And I click Reset Button in Edit Roles
      Then I verify BlackBook "Reset Administration Role" page with Applitools
    And I click Cancel Button from Edit Roles
      Then I verify BlackBook "Role List" page with Applitools
    And I click on Gear Icon 1 "Administrator in Role List"
    And I click Edit from Gear Icon "in Role List"
      Then I verify BlackBook "Edit Administration Role" page with Applitools
    And I click Cancel Button from Edit Roles
      Then I verify BlackBook "Role List" page with Applitools
    And I click on New Role Button in Role List
      Then I verify BlackBook "Add New Role" page with Applitools
    And I click Reset Button in Edit Roles
      Then I verify BlackBook "Reset Administration Role" page with Applitools
    And I click Cancel Button from Edit Roles
      Then I verify BlackBook "Role List" page with Applitools
    #USER need more
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
      Then I verify BlackBook "User List" page with Applitools
    And I click on Gear Icon 3 "USER Editor@example.com in User List"
      Then I verify BlackBook "Gear Icon-Submenus in User List" page with Applitools
    And I click 3 View from Gear Icon in User List
      Then I verify BlackBook "View User Profile Editor@example.com with ROLE" page with Applitools
    #SEGMENTS need more
    #AVATAR
    And I click Avatar Image Button
      Then I verify BlackBook "Avatar button-Submenu" page with Applitools
    And I click My Profile sub menu from Avatar
      Then I verify BlackBook "View My Profile" page with Applitools
    And I click Edit Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click on Save button in Edit User Profile
      Then I verify BlackBook "Save User Profile editor@example.com message" page with Applitools
    And I click Reset Button in Edit User Profile
      Then I verify BlackBook "Reset My Profile" page with Applitools
    And I click Cancel Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait
      Then I verify BlackBook "Login" page with Applitools
    And I wait

    Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | editor@example.com               |   Password1        |

#######################################################################################################################
#                                          Setting-Only                                                               #
#######################################################################################################################

  @TC_CheckRoles_UI_E
  Scenario Outline: "@TC_CheckRoles_UI_E" Verify "Setting-Only" Role UI.(After Setup)
     #BUG ADDED THIS TO CONTINUE
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button
      Then I verify BlackBook "Home" page with Applitools
   #SETTINGS
    And I click on Admin Tab
      Then I verify BlackBook "Admin Tab-Submenu (Setting-Only Account)" page with Applitools
    And I click on Settings submenu from Admin Tab
    Then I verify BlackBook "Settings" page with Applitools
    #SEGMENTS need more
    #AVATAR
    And I click Avatar Image Button
      Then I verify BlackBook "Avatar button-Submenu" page with Applitools
    And I click My Profile sub menu from Avatar
      Then I verify BlackBook "View My Profile" page with Applitools
    And I click Edit Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click on Save button in Edit User Profile
      Then I verify BlackBook "Save User Profile admin@example.com message" page with Applitools
    And I click Reset Button in Edit User Profile
      Then I verify BlackBook "Reset My Profile" page with Applitools
    And I click Cancel Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait
      Then I verify BlackBook "Login" page with Applitools
    And I wait

    Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | admin@example.com               |   Password1       |


#######################################################################################################################
#                                          NO ROLE ATTACHED                                                           #
#######################################################################################################################

  @TC_CheckRoles_UI_F
  Scenario Outline: "@TC_CheckRoles_UI_F" Verify "NO ROLE ATTACHED" Role UI.(After Setup)
     #BUG ADDED THIS TO CONTINUE
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button
      Then I verify BlackBook "Home" page with Applitools
    #SEGMENTS need more
    #AVATAR
    And I click Avatar Image Button
      Then I verify BlackBook "Avatar button-Submenu" page with Applitools
    And I click My Profile sub menu from Avatar
      Then I verify BlackBook "View My Profile" page with Applitools
    And I click Edit Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click on Save button in Edit User Profile
      Then I verify BlackBook "Save User Profile none@example.com message" page with Applitools
    And I click Reset Button in Edit User Profile
      Then I verify BlackBook "Reset My Profile" page with Applitools
    And I click Cancel Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait
      Then I verify BlackBook "Login" page with Applitools
    And I wait

    Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | none@example.com                |   Password1        |


  @TestCases_A-1
  #TODO VISUAL TESTING add back and forward too
  Scenario Outline: "@TestCases_A-1" Click "Refresh" on "User List" will show blue background.
    #(BB-381)(BB-610)
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button
      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/dashboard" URL
    And I wait
    And I click on Home Tab
    And I click Refresh
    And I wait
      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/dashboard" URL
      Then I verify BlackBook "Home" page with Applitools
    And I click on Home Tab
    And I click Avatar Image Button
    And I click My Profile sub menu from Avatar
    And I wait
    And I click Refresh
    And I wait
      Then I should see that I am in "part" "qa-autobahn.blackbookcloud.com/user" URL
      Then I verify BlackBook "User List" page with Applitools
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

    Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | user1@example.com               |   Password1        |

  @TestCases_A-2
  Scenario Outline: "@TestCases_A-2" (Add New Roles): Role Permission does not need to be "Require" field. (story) just name and market fill.
    #(BB-601)(BB-733)
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
      Then I verify BlackBook "Role List" page with Applitools
    And I click on New Role Button in Role List
      Then I verify BlackBook "Add New Role" page with Applitools
    And I select Role Market "US Used Car" in Role Editor
    And I enter Role Name "RoleName8"
      Then I verify BlackBook "-Require- is gone for fields in Add New Role" page with Applitools
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And I wait
    And I enter "view" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "0" "User (Filter auto select in tree)" Permission row in Role Editor
      Then I verify BlackBook "Filter auto select in tree -View- 3 words" page with Applitools
    And I clear text box selected "FilterPermissions" in Role Editor
      Then I verify BlackBook "Filter auto select in tree -view- 3 word" page with Applitools
    #Enable User
    And I wait
    And I enter "user1@example.com" on Filter Users in Role Editor
    And I wait
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
      Then I verify BlackBook "Save RoleName8 Role" page with Applitools
    And I wait
    And I click on Gear Icon 6 "RoleName8 in Role List"
    And I click Delete from Gear Icon
      Then I verify BlackBook "Error Message: User are assigned to Role.." page with Applitools
    And I wait
    And I click on Gear Icon 6 "RoleName8 in Role List"
    And I click Edit from Gear Icon "in Role List"
      Then I verify BlackBook "Edit RoleName8 Role" page with Applitools
    #Didable User
    And I wait
    And I enter "user1@example.com" on Filter Users in Role Editor
    And I wait
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
      Then I verify BlackBook "Save RoleName8 Role message" page with Applitools
    And I wait
    And I click on Delete button in Role Editor
      Then I verify BlackBook "Pop up:Are you sure you want to delete the role, RoleName8? This action can't be undone." page with Applitools
    And I click "Confirm" Button for modal warning message from Edit Roles
      Then I verify BlackBook "Role List" page with Applitools
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  Examples:
  | currentEmailAddress             |   currentPassword  |
#With Role attached
  | user1@example.com               |   Password1        |



  @TestCases_A-3
  Scenario Outline: "@TestCases_A-3" Creation of "New User" wont attached roles to it when added.
    # (BB-479)(BB-744)(BB-622)(BB-478)
    And I enter my user email address user1@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I wait
      Then  I store value #of Users displayed for Administration in Role List
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
    And I click on New User Button in User List
     Then I verify BlackBook "Add New User Profile" page with Applitools
    When I enter my first name <firstName> in Form
      Then I should not see in "firstName" errors displayed
    And I enter my last name <lastName> in Form
      Then I should not see in "lastName" errors displayed
    And I enter my email address <emailAddress> in Form
      Then I should not see in "emailAddress" errors displayed
    And I enter my phone number <phoneNumber> in Form
      Then I should not see in "phoneNumber" errors displayed
    And I enter my new Password <newPassWord> in Form
      Then I should not see in "newPassWord" errors displayed
    And I enter my confirm new password <confirmNewPassWord> in Form
      Then I should not see in "confirmNewPassWord" errors displayed
    And I enter Filter Roles search "Administrators" in Edit User Profile
    And I click checkbox User's Roles "Administrators"
      Then I verify BlackBook "New User -Form Fill-" page with Applitools
    And I wait
    And I click on Save button in Edit User Profile
      Then I should see "User Creation Successful" displayed on "UserList" popup
    And I wait
    And I click Status Filter
    And I enter Filter User List <emailAddress> in User List
    And I wait
      Then I should see user's Role "Administrators" in User List
    And I wait
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I wait
      Then I should see #of Users has increase value for Administration in Role List
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address admintestemail40@yopmail.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click Avatar Image Button
    And I click My Profile sub menu from Avatar
    And I click Edit Button in Edit User Profile
      Then I verify BlackBook "Edit User Profile -Current Form-" page with Applitools
    And I enter my phone number 123-1234567 in Form
    And I click Cancel Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click Edit Button in Edit User Profile
      Then I verify BlackBook "Edit User Profile -Current Form-" page with Applitools
    And I clear text box selected "FirstName" in User Profile
    And I enter my first name firstName39 in Form
    And I clear text box selected "LastName" in User Profile
    And I enter my last name LastName39 in Form
    And I clear text box selected "EmailAddress" in User Profile
    And I enter my email address admintestemail39@yopmail.com in Form
    And  I clear text box selected "PhoneNumber" in User Profile
      Then I verify BlackBook "Edit User Profile -Update Form-" page with Applitools
    And I wait
    And I click on Save button in Edit User Profile
      Then I verify BlackBook "Save User Profile admintestemail39@yopmail.com" page with Applitools
    And I click Cancel Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address admintestemail39@yopmail.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait

    Examples:
      | firstName      | lastName      | emailAddress                  |phoneNumber    | newPassWord | confirmNewPassWord |
      |   firstName40  | lastName40    | admintestemail40@yopmail.com  |               | Password1   |   Password1        |



