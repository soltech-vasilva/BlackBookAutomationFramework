###################################
#               BUG               #
###################################

Feature:  "Verify that this bugs dont return to the application."

  Rules: Verify "User List" opens

  Question:


  Background:

    Given I enter BlackBook Login Website
    #And I wait
       #BUG ADDED THIS TO CONTINUE
       ## bug that bypasses login happens only in desktop catches issues (it thinks is login) , browserstack works fine
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I enter my user email address user1@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    #And I wait

######################################################################################################################
#                                             Test cases A                                                           #
#######################################################################################################################

  @TestCases_A-1
  Scenario: "@TestCases_A-1" (BB-368) Verify current User can see current profile after seen other user's profile.(same component call "Caching issues")
    When I click on Admin Tab
    And I click on Users submenu from Admin Tab
    #And I wait
    And I enter Filter User List admintestemail1@yopmail.com in User List
    And I click on Gear Icon 1 "admintestemail1@yopmail.com in User List"
    And I click 1 View from Gear Icon in User List
    #And I wait
    And I click Edit Button in Edit User Profile
    #And I wait
      Then I should see user's "emailAddress" displayed in screen with value "admintestemail1@yopmail.com"
    And I click Avatar Image Button
    And I click My Profile sub menu from Avatar
    #And I wait
      Then I should see user's "emailAddress" displayed in screen with value "user1@example.com"
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    #And I wait

  @TestCases_A-2
  Scenario: "@TestCases_A-2" (BB-384) Verify current User information is not deleted from UI if "RESET"->"CANCEL"
    And I click Avatar Image Button
    And I click My Profile sub menu from Avatar
      Then I should see user's "emailAddress" displayed in screen with value "user1@example.com"
    And I click Edit Button in Edit User Profile
    And I click Reset Button in Edit User Profile
    #And I wait
    And I click Cancel Button in Edit User Profile
      Then I should see user's "emailAddress" displayed in screen with value "user1@example.com"
    #And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    #And I wait

#  @TestCases_A-3
#  Scenario Outline: "@TestCases_A-3" (BB-367) Modify New Password as same Confirm Password cant click "SAVE" button to create user.(NOT FIX) (BUG)
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I wait
#    And I click on New User Button in User List
#    When I enter my first name <firstName> in Form
#      Then I should not see in "firstName" errors displayed
#    And I enter my last name <lastName> in Form
#      Then I should not see in "lastName" errors displayed
#    And I enter my email address <emailAddress> in Form
#      Then I should not see in "emailAddress" errors displayed
#    And I enter my phone number <phoneNumber> in Form
#      Then I should not see in "phoneNumber" errors displayed
#    And I enter my new Password <newPassWord> in Form
#      Then I should not see in "newPassWord" errors displayed
#    And I enter my confirm new password <confirmNewPassWord> in Form
#      Then I should not see in "confirmNewPassWord" errors displayed
#    And I add extra string "1" to my "newPassWord"
#    And I delete the amount "1" characters from my "newPassWord"
#    And I click checkbox User's Roles "Administrators"
#    And I wait
#      Then I should see in "Save button" "active"
#
#    Examples:
#      | firstName      | lastName      | emailAddress                  |phoneNumber    | newPassWord | confirmNewPassWord |
##Valid 26 Users input
#      |   firstName27  | lastName27    | admintestemail27@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |

    @TestCases_A-4
  Scenario: "@TestCases_A-4" (BB-413) Click "Save" twice in Edit Role list will show error (weird state).
    And I click on Admin Tab
    #And I wait
    And I click on Roles submenu from Admin Tab
    #And I wait
    And I click on Gear Icon 3 "Basic Role-No Permissions in Role List"
    And I click Edit from Gear Icon "in Role List"
    #And I wait
    And I click on Save button in Role Editor
    #And I wait
    #Turn On "Settings" submenu
    And I click checkbox Permission "Settings" in Role Editor
      #And I wait
      Then I should see Permissions "Settings" checkbox "checked" in Role Editor
    And I click on Save button in Role Editor
      Then I should see "Role successfully updated" displayed on "EditRoles" popup
    #And I wait
    And I click Cancel Button from Edit Roles
    And I click on Gear Icon 3 "Basic Role-No Permissions in Role List"
    And I click Edit from Gear Icon "in Role List"
    #Turn off "Settings" submenu
    And I click checkbox Permission "Settings" in Role Editor
     # And I wait
      Then I should see Permissions "Settings" checkbox "unchecked" in Role Editor
    And I click on Save button in Role Editor
    #And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    #And I wait

  @TestCases_A-5
  Scenario: "@TestCases_A-5" (BB-247) Entering credential will not go straight to "Home" page.
      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/dashboard" URL
    #And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    #And I wait

  #Todo continue refactoring
  @TestCases_A-6
  Scenario: "@TestCases_A-6" (BB-360) Active Status is editable by user.
    And I wait
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    #User has "Edit-Full-Roles"
    And I enter my user email address editor@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    #And I wait
    And I click Avatar Image Button
    And I click My Profile sub menu from Avatar
    #And I wait
    And I click Edit Button in Edit User Profile
    And I wait
    And I click User Active checkbox
    And I wait
      Then I should see on User Active checkbox inactive
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-7
  Scenario: "@TestCases_A-7" (BB-385) Upper Case sensitive on "Filter on User List".
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I click Status Filter
    And I enter Filter User List admintestemail6@yopmail.com in User List
    And I click on Gear Icon 1 "admintestemail6@yopmail.com in User List"
    And I click Edit from Gear Icon "in User List"
      Then I should see user's "emailAddress" displayed in screen with value "admintestemail6@yopmail.com"
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I click Status Filter
    And I enter Filter User List AdminTestEmail6@Yopmail.Com in User List
    And I click on Gear Icon 1 "AdminTestEmail6@Yopmail.Com in User List"
    And I click Edit from Gear Icon "in User List"
      Then I should see user's "emailAddress" displayed in screen with value "admintestemail6@yopmail.com"
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-8
  Scenario: "@TestCases_A-8" (BB-397) "Cancel" button wont exit out from "New Role" page.
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on Gear Icon 2 "AllPermissions in Role List"
    And I click Edit from Gear Icon "in Role List"
    And I wait
    And I click Cancel Button from Edit Roles
    And I wait
      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/role/list" URL
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-9
  Scenario: "@TestCases_A-9" (BB-398) Gear Icon stop working after exiting "New Role" page
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on Gear Icon 2 "AllPermissions in Role List"
    And I click Edit from Gear Icon "in Role List"
    And I click Cancel Button from Edit Roles
    And I wait
      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/role/list" URL
    And I wait
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
    And I enter Filter User List admintestemail6@yopmail.com in User List
    And I click on Gear Icon 1 "admintestemail6@yopmail.com in User List"
      Then I should see User List Edit sub-menu options
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-10
  Scenario: "@TestCases_A-10" (BB-388) "Delete" sub menu on "User List" is missing from menu. (it only needs 3 items)
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
    And I enter Filter User List admintestemail6@yopmail.com in User List
    And I click on Gear Icon 1 "admintestemail6@yopmail.com in User List"
      Then I should see User List Edit sub-menu options
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-11
  Scenario Outline: "@TestCases_A-11" (BB-399) Click "Reset" wont clear Error messages (Add User) [This changed 2-22-17 it should not erase "Require" in fields after reset button.firstName, lastName, emailAddress,newPassWord,confirmNewPassWord] (BUG cant click on Edit Roles)
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I click on New User Button in User List
    And I wait
    And I enter my first name <firstName> in Form
      But I enter "nothing to first name"
      Then I should see "firstName" message "Required" displayed for this "empty" field
    And I enter my last name <lastName> in Form
      But I enter "nothing to last name"
      Then I should see "lastName" message "Required" displayed for this "empty" field
    And I enter my email address <emailAddress> in Form
      But I enter "nothing to email address"
      Then I should see "emailAddress" message "Required" displayed for this "empty" field
    And I enter my phone number <phoneNumber> in Form
    And I enter my new Password <newPassWord> in Form
      #there is bug were there is no Require showing so I added value for new password to show error on new password
      #But I enter "nothing to New Password"
      #Then I should see "newPassWord" message "Required" displayed for this "empty" field
    And I enter my confirm new password <confirmNewPassWord> in Form
      But I enter "nothing to Confirm New Password"
      Then I should see "confirmNewPassWord" message "Required" displayed for this "empty" field
    And I click checkbox User's Roles "Administrators"
    And I click Reset Button in Edit User Profile
    And I wait
      Then I should see "firstName" message "Required" displayed for this "empty" field
      Then I should see "lastName" message "Required" displayed for this "empty" field
      Then I should see "emailAddress" message "Required" displayed for this "empty" field
      Then I should see "newPassWord" message "Required" displayed for this "filled" field
      Then I should see "confirmNewPassWord" message "Required" displayed for this "empty" field
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  Examples:
  | firstName     | lastName  | emailAddress              | phoneNumber   | newPassWord    | confirmNewPassWord   |
#All Empty Fields
  |               |           |                           |               |  Password1     |                      |



  @TestCases_A-12
  Scenario Outline: "@TestCases_A-12" (BB-287) Click "Reset" wont clear Error messages. (Edit User) [This changed 2-22-17 it should not erase "Require" in fields after reset button.firstName, lastName, emailAddress]
    And I click Avatar Image Button
    And I click My Profile sub menu from Avatar
    And I click Edit Button in Edit User Profile
    And I click Reset Button in Edit User Profile
    And I enter my first name <firstName> in Form
      But I enter "nothing to first name"
      Then I should see "firstName" message "Required" displayed for this "empty" field
    And I enter my last name <lastName> in Form
      But I enter "nothing to last name"
      Then I should see "lastName" message "Required" displayed for this "empty" field
    And I enter my email address <emailAddress> in Form
      But I enter "nothing to email address"
      Then I should see "emailAddress" message "Required" displayed for this "empty" field
    And I enter my phone number <phoneNumber> in Form
    And I enter my Previous Password <previousPassWord> in Form
    And I enter my new Password <newPassWord> in Form
      But I enter "nothing to New Password"
      Then I should see "newPassWord" message "Required" displayed for this "empty" field
    And I enter my confirm new password <confirmNewPassWord> in Form
      But I enter "nothing to Confirm New Password"
      Then I should see "confirmNewPassWord" message "Required" displayed for this "empty" field
    And I click checkbox User's Roles "Administrators"
    And I click Reset Button in Edit User Profile
    And I wait
    Then I should see "firstName" message "Required" displayed for this "empty" field
    Then I should see "lastName" message "Required" displayed for this "empty" field
    Then I should see "emailAddress" message "Required" displayed for this "empty" field
      Then I should not see in "phoneNumber" errors displayed
      Then I should not see in "previousPassWord" errors displayed
      Then I should not see in "newPassWord" errors displayed
      Then I should not see in "confirmNewPassWord" errors displayed
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

    Examples:
      | firstName     | lastName  | emailAddress              | phoneNumber   |previousPassWord | newPassWord    | confirmNewPassWord   |
    #All Empty Fields
      |               |           |                           |               |  Password1      |                |                      |

  @TestCases_A-13
  Scenario: "@TestCases_A-13" (BB-416) Click "Admin" on top menu will open "Roles" page.
    And I click on Admin Tab
      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/dashboard" URL
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait


  @TestCases_A-14
  Scenario Outline: "@TestCases_A-15" (BB-459) "Previous Password" disappears when toggle from other User to "My profile".
    When I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
    And I click Status Filter
    And I enter Filter User List admintestemail1@yopmail.com in User List
    And I click on Gear Icon 1 "admintestemail1@yopmail.com in User List"
    And I click 1 View from Gear Icon in User List
    And I wait
    And I click Edit Button in Edit User Profile
      Then I should see user's "emailAddress" displayed in screen with value "admintestemail1@yopmail.com"
    And I click Avatar Image Button
    And I click My Profile sub menu from Avatar
    And I wait
      Then I should see user's "emailAddress" displayed in screen with value "user1@example.com"
    And I wait
    And I enter my Previous Password <previousPassWord> in Form
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  Examples:
  |previousPassWord|
  |  Password1     |



  @TestCases_A-15
  Scenario: "@TestCases_A-15" (BB-362) "View" for User list should be gray out (Permissions Not to Vew other users).(changed it will need permission not enforce currently)
     #USER 1
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I wait
#    And I click on Gear Icon 3 "Basic Account in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    #Enable Permission
#    And I click Filter By Group dropdown "User" Permissions in Role Editor
#    And I enter "Can View User List" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Can view User List" Permission row in Role Editor
#    And I clear text box selected "FilterPermissions" in Role Editor
#    And I click on Save button in Role Editor
#    Then I should see "Role successfully updated" displayed on "EditRoles" popup
#    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait
    #User2
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address editor@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
    And I click Status Filter
    And I enter Filter User List user3@example.com in User List
    And I click on Gear Icons 1 inactive
    And I wait
    And I click Avatar Image Button
#    #USER 1   disable all permission Basic Account
#    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
#    And I wait
#    And I enter my user email address user1@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I wait
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I wait
#    And I click on Gear Icon 3 "Basic Account in Role List"
#    And I click Edit from Gear Icon "in Role List"
#     #Disable Permission
#    And I click Filter By Group dropdown "User" Permissions in Role Editor
#    And I enter "Can View User List" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Can view User List" Permission row in Role Editor
#    And I clear text box selected "FilterPermissions" in Role Editor
#    And I click on Save button in Role Editor
#    Then I should see "Role successfully updated" displayed on "EditRoles" popup
#    And I wait
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-16
  Scenario: "@TestCases_A-16" (BB-246) Better vocabulary on Password send message
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait
    And I click Forgot Password link
    And I wait
    And I enter my email "user1@example.com" for Forgot Page
    And I wait
    And I click Send Link button
    And I wait
      Then I should see message "Password reset email sent" displayed
    And I wait

  @TestCases_A-17
  Scenario: "@TestCases_A-17" (BB-365) Pressing "Cancel wont exit Edit mode
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I click on New User Button in User List
    And I click Cancel Button in Edit User Profile
      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/user/list" URL
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-18
  Scenario: "@TestCases_A-18" (BB-290) Logout account will not go back to Login page.
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
    And I wait

  @TestCases_A-19
  Scenario: "@TestCases_A-19" (BB-245) Using a valid email will not show "Password reset email sent"
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait
    And I click Forgot Password link
    And I wait
    And I enter my email "admintestemail1@yopmail.com" for Forgot Page
    And I wait
    And I click Send Link button
    And I wait
      Then I should see message "Password reset email sent" displayed
    And I wait





  @TestCases_A-20
  Scenario: "@TestCases_A-20" (BB-476) "Role Market" dropdown box get clear after "Reset".
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on Gear Icon 5 "Editor-Full-User in Role List"
    And I click Edit from Gear Icon "in Role List"
    And I wait
      Then I should see Role Market value "US Used Car"
    And I click Reset Button in Edit Roles
    And I wait
      Then I should see Role Market value "Select One"
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-21
  Scenario: "@TestCases_A-21" (BB-414) Button "Save" is gray out in "Editing Roles".
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on Gear Icon 5 "Editor-Full-User in Role List"
    And I click Edit from Gear Icon "in Role List"
    And I wait
    And I clear text box selected "RoleName" in Role Editor
    And I enter Role Name "Editor-Full-UserHIHI"
      Then I should see in "Save" button "enable" in Edit Role
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait


  @TestCases_A-22
  Scenario Outline: "@TestCases_A-22" (BB-480) Adding "Role" to new user (Add User) does not show "Require".
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
    And I click on New User Button in User List
    When I enter my first name <firstName> in Form
    And I enter my last name <lastName> in Form
    And I enter my email address <emailAddress> in Form
      Then I should see "userrole" message "Required" displayed for this "unchecked" field
    And I click checkbox User's Roles "Administrators"
      Then I should not see in "userrole" errors displayed
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

    Examples:
      | firstName      | lastName      | emailAddress |
      |                |               |              |

  @TestCases_A-23
  Scenario Outline: "@TestCases_A-23" (BB-481) (security purpose) values for Password stay log in text box.
    And I click Avatar Image Button
    And I click My Profile sub menu from Avatar
    And I wait
    And I click Edit Button in Edit User Profile
    And I wait
    And I enter my new Password <newPassWord> in Form
    And I enter my confirm new password <confirmNewPassWord> in Form
    And I enter my Previous Password <previousPassWord> in Form
    And I click Cancel Button in Edit User Profile
    And I click Edit Button in Edit User Profile
      Then I should see user's "previousPassWord" displayed in screen with value ""
      Then I should see user's "newPassWord" displayed in screen with value ""
      Then I should see user's "confirmNewPassWord" displayed in screen with value ""
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

    Examples:
      |previousPassWord |newPassWord    | confirmNewPassWord   |

      | QaAdmin         |  QaAdmi       |      Qa              |



  @TestCases_A-24
  Scenario: "@TestCases_A-24" (BB-460) Close "User Edit" wont go back from where it came from.
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
    And I enter Filter User List admintestemail7@yopmail.com in User List
    And I click on Gear Icon 1 "admintestemail7@yopmail.com in User List"
    And I click Edit from Gear Icon "in User List"
    And I click Cancel Button in Edit User Profile
     Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/user/list" URL
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

    @TestCases_A-25
  Scenario: "@TestCases_A-25" (BB-475) Dropdown boxes in Edit Role wont go to Default value after "Reset"
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on Gear Icon 2 "AllPermissions in Role List"
    And I click Edit from Gear Icon "in Role List"
    And I wait
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And I wait
    And I click Filter By Status dropdown "Inactive" in Role Editor
    And I wait
    And I click Reset Button in Edit Roles
    And I wait
      Then I should see "All" display for Filter By Group in Role Editor
      Then I should see "All" display for Filter By Status in Role Editor
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-26
  Scenario: "@TestCases_A-26" (BB-477) "Filter Roles" in Edit Profile does not clear after click "Reset"
    And I click Avatar Image Button
    And I click My Profile sub menu from Avatar
    And I click Edit Button in Edit User Profile
    And I wait
    And I enter Filter Roles search "Editor" in Edit User Profile
    And I wait
    And I click Reset Button in Edit User Profile
      Then I should see user's "filterRoles" displayed in screen with value ""
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-27
  Scenario: "@TestCases_A-27" (BB-519) Create "New Roles" not working.
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on New Role Button in Role List
    And I enter Role Name "RoleName6"
  #BUG where html has User as Value but Users as text.
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And  I wait
    And I click checkbox  "0" "Users" Permission row in Role Editor
    And I wait
    And I select Role Market "US Used Car" in Role Editor
    And I wait
    And I click on Save button in Role Editor
    Then I should see "Role has been successfully added" displayed on "EditRoles" popup
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

     @TestCases_A-28
  Scenario: "@TestCases_A-28" (BB-441) Permissions gets reset after adding "Role's Users"  (re-Open)
 #require @TestCases_A-20
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on Gear Icon 6 "RoleName6 in Role List"
    And I click Edit from Gear Icon "in Role List"
    And I enter "User1" on Filter Users in Role Editor
    And I wait
    And I click checkbox on first user found from Filter Users in Role Editor
    Then I should see in "Save" button "enable" in Edit Role
    And I click on Save button in Role Editor
    Then I should see "Role successfully updated" displayed on "EditRoles" popup
 #And I click X on Message Popup in Role list
    And I click Cancel Button from Edit Roles
    And I click on Gear Icon 6 "RoleName6 in Role List"
    And I click Edit from Gear Icon "in Role List"
    And I wait
    Then I should see Permissions "Users" checkbox "checked" in Role Editor
    Then I should see Permissions "Settings" checkbox "unchecked" in Role Editor
    Then I should see Permissions "Roles" checkbox "unchecked" in Role Editor
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-29
  Scenario: "@TestCases_A-29" (BB-472) Creating new Role will not add User to it.
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on New Role Button in Role List
    And I enter Role Name "RoleName7"
    And I enter "Users" on Filter Permissions in Role Editor
    And  I wait
    And I click checkbox  "0" "Users" Permission row in Role Editor
    And I wait
    And I select Role Market "US Used Car" in Role Editor
    And I wait
    And I enter "User1" on Filter Users in Role Editor
    And I wait
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
      Then I should see "Role has been successfully added" displayed on "EditRoles" popup
    And I wait
      Then I should see #of Users has increase value for "RoleName7" in Role List
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-30
  Scenario: "@TestCases_A-30" (BB-473) Pop Menu Grammar error missing question mark "?" and role name (require TC-A-31)
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on Gear Icon 7 "RoleName7 in Role List"
    And I click Edit from Gear Icon "in Role List"
    And I enter "User1" on Filter Users in Role Editor
    And I wait
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
    And I click Cancel Button from Edit Roles
    And I wait
    And I click on Gear Icon 7 "RoleName7 in Role List"
    And I click Delete from Gear Icon
    And I wait
    #currently will order by default by number of users
      Then I should see Are you sure you want to delete the role, "RoleName7?" This action can't be undone. displayed for Confirm Role Deletion in Role Editor
    And I click "Cancel" Button for modal warning message from Edit Roles
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-31
  Scenario: "@TestCases_A-31" (BB-474) (Delete Role): Wrong Error display after delete of "Role" (require TC-A-31,32)
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on Gear Icon 7 "RoleName7 in Role List"
    And I wait
    And I click Delete from Gear Icon
    And I wait
    #currently will order by default by number of users
     Then I should see Are you sure you want to delete the role, "RoleName7?" This action can't be undone. displayed for Confirm Role Deletion in Role Editor
    And I click "Confirm" Button for modal warning message from Edit Roles
      Then I should see "The Role has been successfully deleted" displayed on "EditRoles" popup
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-32
    Scenario: "@TestCases_A-32" (BB-474) (Delete Role): Wrong Error display after delete of "Role" (require TC-A-31,32) Delete Created roles next run.
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on Gear Icon 6 "RoleName6 in Role List"
    And I click Edit from Gear Icon "in Role List"
    #Disable User
    And I enter "User1" on Filter Users in Role Editor
    And I wait
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
    And I click Cancel Button from Edit Roles
    And I wait
    And I click on Gear Icon 6 "RoleName6 in Role List"
    And I click Delete from Gear Icon
    And I wait
     Then I should see Are you sure you want to delete the role, "RoleName6?" This action can't be undone. displayed for Confirm Role Deletion in Role Editor
    And I click "Confirm" Button for modal warning message from Edit Roles
      Then I should see "The Role has been successfully deleted" displayed on "EditRoles" popup
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-33
  Scenario: "@TestCases_A-33" (BB-592) (Permission Add User): Add user is not enforce in database. (ROLE:EDITOR CVUL+CVOP+CVRL) "New User" button should not show.
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait
    And I enter my user email address editor@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
     #Instead of hiddden button (grayout instead)
     #Then I should not see "New User" Button in User List
    Then I should see in "NewUser" button "disable" in User List
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-34
  Scenario: "@TestCases_A-34" (BB-582) (Add New Roles): word "Require" need to show on field require.
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on New Role Button in Role List
    And I enter Role Name ""
     Then I should see "RoleName" message "Required" displayed for this "empty" field in Role Editor
     Then I should see "RoleMarket" message "Required" displayed for this "empty" field in Role Editor
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-35
  Scenario: "@TestCases_A-35" (BB-586) (Role Market): Role Market needs to show "None" or a value in Role View.
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on Gear Icon 2 "AllPermissions in Role List"
    And I click 2 View from Gear Icon in Role List
    And I wait
      Then I should see Role Market value "US Used Car"
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-36
  Scenario: "@TestCases_A-36" (BB-616)(Add New Roles): Empty Space (SPACE BAR) gets accepted for role name.
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on New Role Button in Role List
    And I enter Role Name "  "
     Then I should see "RoleName" message "This is not a valid role title" displayed for this "filled" field in Role Editor
     Then I should see "RoleMarket" message "Required" displayed for this "empty" field in Role Editor
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-37
  Scenario: "@TestCases_A-37" (BB-655) (Edit Roles): Cant change "Role Market". Error Message
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I click on Gear Icon 4 "Editor-Full_Roles in Role List"
    And I click Edit from Gear Icon "in Role List"
    And I wait
    And I select Role Market "Canada Used Car" in Role Editor
    And I wait
      Then I should see Role Market value "Canada Used Car"
    And I click on Save button in Role Editor
      Then I should see "Role successfully updated" displayed on "EditRoles" popup
    And I wait
    And I click Cancel Button from Edit Roles
    And I click on Gear Icon 4 "Editor-Full_Roles in Role List"
    And I click Edit from Gear Icon "in Role List"
    And I wait
    And I select Role Market "US Used Car" in Role Editor
    And I wait
      Then I should see Role Market value "US Used Car"
    And I click on Save button in Role Editor
      Then I should see "Role successfully updated" displayed on "EditRoles" popup
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

    #@TestCases_A-40-42 uses "Basic Role-No Permissions" to update permissions
  @TestCases_A-38
  Scenario: "@TestCases_A-38" (BB-626) (Permission canEditSettings): Enable "Settings" for a user will not show Tab "Settings"
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address user2@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
      Then I should not see "Setting" Button in AdminTab
    And I wait
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address user1@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I wait
    And I click on Gear Icon 3 "Basic Role-No Permissions in Role List"
    And I click Edit from Gear Icon "in Role List"
    #Turn On "Settings" submenu
    And I click checkbox Permission "Settings" in Role Editor
    And I click on Save button in Role Editor
      Then I should see "Role successfully updated" displayed on "EditRoles" popup
    And I wait
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address user2@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Settings submenu from Admin Tab
    And I wait
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address user1@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I wait
    And I click on Gear Icon 3 "Basic Role-No Permissions in Role List"
    And I click Edit from Gear Icon "in Role List"
    #Turn Off "Settings" submenu
    And I click checkbox Permission "Settings" in Role Editor
    And I click on Save button in Role Editor
      Then I should see "Role successfully updated" displayed on "EditRoles" popup
    And I wait

     #@TestCases_A-40-42 uses "Basic Role-No Permissions" to update permissions
  @TestCases_A-39
  Scenario: "@TestCases_A-41" (BB-625) (Permission CanViewOtherUsers): Gear Icons are gray out event if permission is enable.
    #USER 1
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I wait
    And I click on Gear Icon 3  "Basic Role-No Permissions in Role List"
    And I click Edit from Gear Icon "in Role List"
    And I wait
    #Enable Permission
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And I enter "Can View User List" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "1" "Can view User List" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
    And I click on Save button in Role Editor
      Then I should see "Role successfully updated" displayed on "EditRoles" popup
    And I wait
    #USER 2
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address user2@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
    And I click Status Filter
    And I enter Filter User List user3@example.com in User List
    And I click on Gear Icons 1 inactive
    And I wait
    #USER 1
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address user1@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I wait
    And I click on Gear Icon 3  "Basic Role-No Permissions in Role List"
    And I click Edit from Gear Icon "in Role List"
     #Enable Permission
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And I enter "Can View Other Users" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "1" "Can View Other Users" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
     #Enable Permission
    And I click Filter By Group dropdown "Roles" Permissions in Role Editor
    And I enter "can View Role List" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "1" "can View Role List" Permission row in Role Editor
    And I click on Save button in Role Editor
      Then I should see "Role successfully updated" displayed on "EditRoles" popup
    And I wait
     #USER 2
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address user2@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
    And I click Status Filter
    And I enter Filter User List user3@example.com in User List
    And I wait
    And I click on Gear Icon 1 "user3@example.com in User List"
    And I click 1 View from Gear Icon in User List
    And I wait
      Then I should see user's "emailAddress" displayed in screen with value "user3@example.com"
    And I wait
     #USER 1   disable all permission Basic Account
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address user1@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I wait
    And I click on Gear Icon 3  "Basic Role-No Permissions in Role List"
    And I click Edit from Gear Icon "in Role List"
    #Disable Permission
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And I enter "Can View Other Users" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "1" "Can View Other Users" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
     #Disable Permission
    And I click Filter By Group dropdown "Roles" Permissions in Role Editor
    And I enter "can View Role List" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "1" "can View Role List" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
     #Disable Permission
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And I enter "Can View User List" on Filter Permissions in Role Editor
    And I wait
    And I click checkbox  "1" "Can view User List" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
    And I click on Save button in Role Editor
      Then I should see "Role successfully updated" displayed on "EditRoles" popup
    And I wait

     #@TestCases_A-40-42 uses "Basic Role-No Permissions" to update permissions
  @TestCases_A-40
  Scenario: "@TestCases_A-40" (BB-624) (Permission CanResetUsersPasswords): Unselected permission "Can Reset Users Passwords" can still add password to user.
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I wait
    And I click on Gear Icon 3  "Basic Role-No Permissions in Role List"
    And I click Edit from Gear Icon "in Role List"
    #Enable Permission
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And I enter "Can Add/Edit Users" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Can Add/Edit Users" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
     #Enable Permission
    And I enter "Can View Other Users" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Can View Other Users" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
     #Enable Permission
    And I enter "Can View User List" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Can View User List" Permission row in Role Editor
    And I click on Save button in Role Editor
      Then I should see "Role successfully updated" displayed on "EditRoles" popup
    And I wait
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address user2@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
    And I click Status Filter
    And I enter Filter User List user3@example.com in User List
    And I click on Gear Icon 1 "user3@example.com in User List"
    And I click Edit from Gear Icon "in User List"
      Then I should not see "NewPassword" "Textbox" in Edit Profile
    And I wait
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address user1@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I wait
    And I click on Gear Icon 3  "Basic Role-No Permissions in Role List"
    And I click Edit from Gear Icon "in Role List"
    #Enable Permission
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And I enter "Can Reset Users Passwords" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Can Reset Users Passwords" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I click on Save button in Role Editor
      Then I should see "Role successfully updated" displayed on "EditRoles" popup
    And I wait
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address user2@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
    And I click Status Filter
    And I enter Filter User List user3@example.com in User List
    And I click on Gear Icon 1 "user3@example.com in User List"
    And I click Edit from Gear Icon "in User List"
    And I enter my new Password Password1 in Form
    And I wait
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address user1@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab
    And I wait
    And I click on Gear Icon 3  "Basic Role-No Permissions in Role List"
    And I click Edit from Gear Icon "in Role List"
    #Disable Permission
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And I enter "Can Add/Edit Users" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Can Add/Edit Users" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
     #Disable Permission
    And I enter "Can View Other Users" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Can View Other Users" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
     #Disable Permission
    And I enter "Can Reset Users Passwords" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Can Reset Users Passwords" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
     #Disable Permission
    And I enter "Can View User List" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Can View User List" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I wait
    And I click on Save button in Role Editor
      Then I should see "Role successfully updated" displayed on "EditRoles" popup
    And I wait

  @TestCases_A-41
  Scenario: "@TestCases_A-41" (BB-471) Gray out "Active Status" in "View" user mode. (make sure is not editable)
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
    And I click Status Filter
    And I enter Filter User List user3@example.com in User List
    And I click on Gear Icon 1 "user3@example.com in User List"
    And I click 1 View from Gear Icon in User List
    And I wait
    And I click User Active checkbox
    And I wait
      Then I should see on User Active checkbox inactive
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait

  @TestCases_A-42
  Scenario: "@TestCases_A-42" (BB-348) Using basic ULR will load Dashboard instead of Login page.
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait
    And I reload page "https://qa-autobahn.blackbookcloud.com"
      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
    And I wait

#     #TODO aqui
#  @TestCases_A-45
#  Scenario: "@TestCases_A-44" (BB-254) Using URL directory bypass Login process (NOT FIX)
#    And I wait
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#    And I wait
#    #HOME
#    And I reload page "https://qa-autobahn.blackbookcloud.com/dashboard"
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    #ROLE
#    And I reload page "https://qa-autobahn.blackbookcloud.com/role/list"
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload page "https://qa-autobahn.blackbookcloud.com/role"
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload page "https://qa-autobahn.blackbookcloud.com/role/2"
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload page "https://qa-autobahn.blackbookcloud.com/role/2?edit=true"
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    #USER
#    And I reload page "https://qa-autobahn.blackbookcloud.com/user/list"
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload page "https://qa-autobahn.blackbookcloud.com/user"
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload page "https://qa-autobahn.blackbookcloud.com/user/6"
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload page "https://qa-autobahn.blackbookcloud.com/user/6?edit=true"
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload page "https://qa-autobahn.blackbookcloud.com/settings"
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    #Segment
#    And I reload page "https://qa-autobahn.blackbookcloud.com/segments/list"
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload page "https://qa-autobahn.blackbookcloud.com/segments"
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I wait
