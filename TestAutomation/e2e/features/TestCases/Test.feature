###################################
#               BUG               #
###################################

Feature:  "Verify that this bugs dont return to the application."

  Rules: Verify "User List" opens

  Question:


  Background:
  Given I enter BlackBook Login Website
    Then I verify BlackBook "Login" page with Applitools
  And I wait

#######################################################################################################################
#                                             TC_Login_A                                                              #
#######################################################################################################################

  @TC_CheckRoles_UI_A
  Scenario Outline: "@TC_CheckRoles_UI_A" Verify "Administration" Role UI.(After Setup) (BB-588)(BB-471 p-2)
     #BUG ADDED THIS TO CONTINUE
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
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
    And I click View from Gear Icon in Role List
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
    And I click on Gear Icon 1 "USER admin@example.com in User List"
      Then I verify BlackBook "Gear Icon-Submenus in User List" page with Applitools
    And I click 1 View from Gear Icon in User List
      Then I verify BlackBook "View User Profile admin@example.com with NO ROLE" page with Applitools
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I click on Gear Icon 2 "USER all@example.com in User List"
    And I click 2 View from Gear Icon in User List
      Then I verify BlackBook "View User Profile all@example.com with ROLE" page with Applitools
    And I click Edit Button in Edit User Profile
      Then I verify BlackBook "Edit User Profile all@example.com" page with Applitools
    And I click on Save button in Edit User Profile
      Then I verify BlackBook "Save User Profile all@example.com message *BUG*" page with Applitools
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I click on Gear Icon 2 "USER all@example.com in User List"
    And I click 2 View from Gear Icon in User List
    And I click Edit Button in Edit User Profile
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
    And I click Reset Button in Edit User Profile
      Then I verify BlackBook "Reset My Profile" page with Applitools
    And I click Cancel Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
      Then I verify BlackBook "Login" page with Applitools
    And I wait

    Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | user1@example.com               |   Password1        |


  @TC_CheckRoles_UI_B
  Scenario Outline: "@TC_CheckRoles_UI_B" Verify "Basic Account" Role UI.(After Setup) (BB-471 p-1)
    #BUG ADDED THIS TO CONTINUE
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
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
    And I click Reset Button in Edit User Profile
      Then I verify BlackBook "Reset My Profile" page with Applitools
    And I click Cancel Button in Edit User Profile
      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
      Then I verify BlackBook "Login" page with Applitools
    And I wait

Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | user2@example.com               |   Password1        |























