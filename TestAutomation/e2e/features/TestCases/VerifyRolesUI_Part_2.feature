###################################
#       Verify Roles UI           #
###################################

Feature:  "Verify each Role UI"

  Rules: Each role have different permission enable and things get disable or hidden in UI.

  Question:

  Background:
  Given I enter BlackBook Login Website
   #ADDED THIS TO CONTINUE TEST CASES
    And I reload "LogIn" page

#######################################################################################################################
#                                            T_Admin View All Only                                                    #
#######################################################################################################################

  @TC_CheckRoles_UI_A
  Scenario Outline: "@TC_CheckRoles_UI_A" Verify "T_Admin View All Only" Role UI.(After EditRoles)
    #(BB-663) (BB-736) (BB-577)
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button

    #BUG IT OPENS UNOTHORIZE PAGE
    And I wait
    And I click on Home Tab
    And I wait

      #Then I verify BlackBook "Home" page with Applitools
    #ROLES
    And I click on Admin Tab
      Then I verify BlackBook "Admin Tab-Submenu (Administartor Account)" page with Applitools
    And I click on Roles submenu from Admin Tab
      Then I verify BlackBook "Role List" page with Applitools
    #USER
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
      Then I verify BlackBook "User List" page with Applitools
    And I click on Gear Icon 1 "USER admin@example.com in User List"
      Then I verify BlackBook "Gear Icon-Submenus in User List" page with Applitools
    And I click 1 View from Gear Icon in User List
      Then I verify BlackBook "View User Profile admin@example.com with ROLE" page with Applitools
    #SETTINGS
    And I click on Admin Tab
    And I click on Settings submenu from Admin Tab
     Then I verify BlackBook "Settings" page with Applitools
    #AVATAR
    And I click Avatar Image Button
      Then I verify BlackBook "Avatar button-Submenu" page with Applitools
    And I click My Profile sub menu from Avatar
      Then I verify BlackBook "View My Profile" page with Applitools
    #BUG on my Profile
#    And I click Edit Button in Edit User Profile
#      Then I verify BlackBook "Edit My Profile" page with Applitools
#    And I click on Save button in Edit User Profile
#      Then I verify BlackBook "Save User Profile admintestemail11@yopmail.com message" page with Applitools
#    And I click Edit Button in Edit User Profile
#    And I click Reset Button in Edit User Profile
#      Then I verify BlackBook "Reset My Profile" page with Applitools
#    And I click Cancel Button in Edit User Profile
#      Then I verify BlackBook "Edit My Profile" page with Applitools
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
      #Then I verify BlackBook "Login" page with Applitools

    Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | admintestemail11@yopmail.com    |   QaAdmin123       |


######################################################################################################################
#                                            U_Edit Other Users Basic                                                 #
######################################################################################################################

  @TC_CheckRoles_UI_B
  Scenario Outline: "@TC_CheckRoles_UI_B" Verify "U_Edit Other Users Basic" Role UI.(After EditRoles)
    #(BB-664) (BB-751)
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button

    #BUG IT OPENS UNOTHORIZE PAGE
    And I wait
    And I click on Home Tab
    And I wait

      #Then I verify BlackBook "Home" page with Applitools
     #ROLES
    And I click on Admin Tab
      Then I verify BlackBook "Admin Tab-Submenu (Administartor Account)" page with Applitools
    And I click on Roles submenu from Admin Tab
      Then I verify BlackBook "Role List" page with Applitools
    #USER need more
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
      Then I verify BlackBook "User List" page with Applitools
    And I enter Filter User List feature@example.com in User List
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
    And I click Edit Button in Edit User Profile
    And I click Reset Button in Edit User Profile
      Then I verify BlackBook "Reset User Profile" page with Applitools
    And I click Cancel Button in Edit User Profile
      #Then I verify BlackBook "User List" page with Applitools
    #AVATAR
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
      #Then I verify BlackBook "Login" page with Applitools

    Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | admintestemail12@yopmail.com    |   QaAdmin123       |


#######################################################################################################################
#                                            V_Edit Other Users Basic + Password                                      #
#######################################################################################################################

  @TC_CheckRoles_UI_C
  Scenario Outline: "@TC_CheckRoles_UI_C" Verify "V_Edit Other Users Basic + Password" Role UI.(After EditRoles)
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button

    #BUG IT OPENS UNOTHORIZE PAGE
    And I wait
    And I click on Home Tab
    And I wait

      #Then I verify BlackBook "Home" page with Applitools
     #ROLES
    And I click on Admin Tab
      Then I verify BlackBook "Admin Tab-Submenu (Administartor Account)" page with Applitools
    And I click on Roles submenu from Admin Tab
      Then I verify BlackBook "Role List" page with Applitools
    #USER need more
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
      Then I verify BlackBook "User List" page with Applitools
    And I enter Filter User List feature@example.com in User List
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
      Then I verify BlackBook "Save User Profile all@example.com message *BUG*" page with Applitools
    And I click Edit Button in Edit User Profile
    And I click Reset Button in Edit User Profile
      Then I verify BlackBook "Reset User Profile" page with Applitools
    And I click Cancel Button in Edit User Profile
      #Then I verify BlackBook "User List" page with Applitools
    #AVATAR
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
      #Then I verify BlackBook "Login" page with Applitools

    Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | admintestemail13@yopmail.com    |   QaAdmin123       |

#######################################################################################################################
#                                            W_Edit Other Users Basic + Roles                                         #
#######################################################################################################################

  @TC_CheckRoles_UI_D
  Scenario Outline: "@TC_CheckRoles_UI_D" Verify "W_Edit Other Users Basic + Roles" Role UI.(After EditRoles)
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button

    #BUG IT OPENS UNOTHORIZE PAGE
    And I wait
    And I click on Home Tab
    And I wait

      #Then I verify BlackBook "Home" page with Applitools
     #ROLES
    And I click on Admin Tab
      Then I verify BlackBook "Admin Tab-Submenu (Administartor Account)" page with Applitools
    And I click on Roles submenu from Admin Tab
      Then I verify BlackBook "Role List" page with Applitools
    #USER need more
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
      Then I verify BlackBook "User List" page with Applitools
    And I enter Filter User List feature@example.com in User List
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
      Then I verify BlackBook "Save User Profile all@example.com message *BUG*" page with Applitools
    And I click Edit Button in Edit User Profile
    And I click Reset Button in Edit User Profile
      Then I verify BlackBook "Reset User Profile" page with Applitools
    And I click Cancel Button in Edit User Profile
      #Then I verify BlackBook "User List" page with Applitools
    #AVATAR
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
      #Then I verify BlackBook "Login" page with Applitools

    Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | admintestemail14@yopmail.com    |   QaAdmin123       |


#######################################################################################################################
#                                           X_Edit Other Users Basic + Roles + Password                               #
#######################################################################################################################

  @TC_CheckRoles_UI_E
  Scenario Outline: "@TC_CheckRoles_UI_E" Verify "X_Edit Other Users Basic + Roles + Password" Role UI.(After EditRoles)
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button

    #BUG IT OPENS UNOTHORIZE PAGE
    And I wait
    And I click on Home Tab
    And I wait

      #Then I verify BlackBook "Home" page with Applitools
     #ROLES
    And I click on Admin Tab
      Then I verify BlackBook "Admin Tab-Submenu (Administartor Account)" page with Applitools
    And I click on Roles submenu from Admin Tab
      Then I verify BlackBook "Role List" page with Applitools
    #USER need more
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
      Then I verify BlackBook "User List" page with Applitools
    And I enter Filter User List feature@example.com in User List
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
      Then I verify BlackBook "Save User Profile all@example.com message *BUG*" page with Applitools
    And I click Edit Button in Edit User Profile
    And I click Reset Button in Edit User Profile
      Then I verify BlackBook "Reset User Profile" page with Applitools
    And I click Cancel Button in Edit User Profile
      #Then I verify BlackBook "User List" page with Applitools
    #AVATAR
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
      #Then I verify BlackBook "Login" page with Applitools

    Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | admintestemail15@yopmail.com    |   QaAdmin123       |








