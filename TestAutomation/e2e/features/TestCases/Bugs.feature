###################################
#               BUG               #
###################################

Feature:  "Verify that this bugs dont return to the application."

  Rules: Verify "User List" opens

  Question:


  Background:

    Given I enter BlackBook Login Website
    #Added this to continue test if previous did not end
    And  I reload "LogIn" page
    And I enter my user email address user1@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button

######################################################################################################################
#                                             Test cases A                                                           #
#######################################################################################################################

#  @TestCases_A-1
#  Scenario: "@TestCases_A-1" (BB-368) Verify current User can see current profile after seen other user's profile.(same component call "Caching issues")
#    When I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I enter Filter User List admintestemail1@yopmail.com in User List
#    And I click on Gear Icon 1 "admintestemail1@yopmail.com in User List"
#    And I click 1 View from Gear Icon in User List
#    And I click Edit Button in Edit User Profile
#      Then I should see user's "emailAddress" displayed in screen with value "admintestemail1@yopmail.com"
#    And I click Avatar Image Button
#    And I click My Profile sub menu from Avatar
#      Then I should see user's "emailAddress" displayed in screen with value "user1@example.com"
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-2
#  Scenario: "@TestCases_A-2" (BB-384) Verify current User information is not deleted from UI if "RESET"->"CANCEL"
#    And I click Avatar Image Button
#    And I click My Profile sub menu from Avatar
#      Then I should see user's "emailAddress" displayed in screen with value "user1@example.com"
#    And I click Edit Button in Edit User Profile
#    And I click Reset Button in Edit User Profile
#    And I click Cancel Button in Edit User Profile
#      Then I should see user's "emailAddress" displayed in screen with value "user1@example.com"
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
##  @TestCases_A-3
##  Scenario Outline: "@TestCases_A-3" (BB-367) Modify New Password as same Confirm Password cant click "SAVE" button to create user.(NOT FIX) (BUG)
##    And I click on Admin Tab
##    And I click on Users submenu from Admin Tab
##    And I click on New User Button in User List
##    When I enter my first name <firstName> in Form
##      Then I should not see in "firstName" errors displayed
##    And I enter my last name <lastName> in Form
##      Then I should not see in "lastName" errors displayed
##    And I enter my email address <emailAddress> in Form
##      Then I should not see in "emailAddress" errors displayed
##    And I enter my phone number <phoneNumber> in Form
##      Then I should not see in "phoneNumber" errors displayed
##    And I enter my new Password <newPassWord> in Form
##      Then I should not see in "newPassWord" errors displayed
##    And I enter my confirm new password <confirmNewPassWord> in Form
##      Then I should not see in "confirmNewPassWord" errors displayed
##    And I add extra string "1" to my "newPassWord"
##    And I delete the amount "1" characters from my "newPassWord"
##    And I click checkbox User's Roles "Administrators" "in Edit User Profile"
##      Then I should see in "Save button" "active"
##
##    Examples:
##      | firstName      | lastName      | emailAddress                  |phoneNumber    | newPassWord | confirmNewPassWord |
###Valid 26 Users input
##      |   firstName27  | lastName27    | admintestemail27@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
#
#    @TestCases_A-4
#  Scenario: "@TestCases_A-4" (BB-413) Click "Save" twice in Edit Role list will show error (weird state).
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 3 "Basic Role-No Permissions in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    And I click on Save button in Role Editor
#      Then I should see "Role successfully updated" displayed on "EditRoles" popup
#      And I click X on Message Popup in Role list
#      And I click Edit Button in Edit Roles
#    #Turn On "Settings" submenu
#    And I click checkbox Permission "Settings" in Role Editor
#      Then I should see Permissions "Settings" checkbox "checked" in Role Editor
#    And I click on Save button in Role Editor
#      Then I should see "Role successfully updated" displayed on "EditRoles" popup
#      And I click X on Message Popup in Role list
#      And I click Edit Button in Edit Roles
#    And I click Cancel Button from Edit Roles
#    And I click on Gear Icon 3 "Basic Role-No Permissions in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    #Turn off "Settings" submenu
#    And I click checkbox Permission "Settings" in Role Editor
#      Then I should see Permissions "Settings" checkbox "unchecked" in Role Editor
#    And I click on Save button in Role Editor
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-5
#  Scenario: "@TestCases_A-5" (BB-247) Entering credential will not go straight to "Home" page.
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/dashboard" URL
#      #Then I should see that I am in "full" "autobahn.blackbookcloud.com/dashboard" URL
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-6
#  Scenario: "@TestCases_A-6" (BB-360) Active Status is editable by user.
#    #Dont takeout wait
#    And I wait
#    #Added this to continue test if previous did not end
#    And  I reload "LogIn" page
#    #User has "Edit-Full-Roles"
#    And I enter my user email address editor@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I click Avatar Image Button
#    And I click My Profile sub menu from Avatar
#    And I click Edit Button in Edit User Profile
#    And I click User Active checkbox
#      Then I should see on User Active checkbox inactive
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-7
#  Scenario: "@TestCases_A-7" (BB-385) Upper Case sensitive on "Filter on User List".
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    #And I click Status Filter
#    And I enter Filter User List admintestemail6@yopmail.com in User List
#    And I click on Gear Icon 1 "admintestemail6@yopmail.com in User List"
#    And I click Edit from Gear Icon "in User List"
#      Then I should see user's "emailAddress" displayed in screen with value "admintestemail6@yopmail.com"
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    #And I click Status Filter
#    And I enter Filter User List AdminTestEmail6@Yopmail.Com in User List
#    And I click on Gear Icon 1 "AdminTestEmail6@Yopmail.Com in User List"
#    And I click Edit from Gear Icon "in User List"
#      Then I should see user's "emailAddress" displayed in screen with value "admintestemail6@yopmail.com"
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-8
#  Scenario: "@TestCases_A-8" (BB-397) "Cancel" button wont exit out from "New Role" page.
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 2 "AllPermissions in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    And I click Cancel Button from Edit Roles
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/role/list" URL
#      #Then I should see that I am in "full" "autobahn.blackbookcloud.com/role/list" URL
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-9
#  Scenario: "@TestCases_A-9" (BB-398) Gear Icon stop working after exiting "New Role" page
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 2 "AllPermissions in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    And I click Cancel Button from Edit Roles
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/role/list" URL
#      #Then I should see that I am in "full" "autobahn.blackbookcloud.com/role/list" URL
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I enter Filter User List admintestemail6@yopmail.com in User List
#    And I click on Gear Icon 1 "admintestemail6@yopmail.com in User List"
#      Then I should see Gear sub-menu options "in Role List"
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-10
#  Scenario: "@TestCases_A-10" (BB-388) "Delete" sub menu on "User List" is missing from menu. (it only needs 3 items)
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I enter Filter User List admintestemail6@yopmail.com in User List
#    And I click on Gear Icon 1 "admintestemail6@yopmail.com in User List"
#      Then I should see Gear sub-menu options "in User List"
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-11
#  Scenario Outline: "@TestCases_A-11" (BB-399) Click "Reset" wont clear Error messages (Add User) [This changed 2-22-17 it should not erase "Require" in fields after reset button.firstName, lastName, emailAddress,newPassWord,confirmNewPassWord] (BUG cant click on Edit Roles)
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I click on New User Button in User List
#    And I enter my first name <firstName> in Form
#      But I enter "nothing to first name"
#      Then I should see "firstName" message "Required" displayed for this "empty" field
#    And I enter my last name <lastName> in Form
#      But I enter "nothing to last name"
#      Then I should see "lastName" message "Required" displayed for this "empty" field
#    And I enter my email address <emailAddress> in Form
#      But I enter "nothing to email address"
#      Then I should see "emailAddress" message "Required" displayed for this "empty" field
#    And I enter my phone number <phoneNumber> in Form
#    And I enter my new Password <newPassWord> in Form
#    And I enter my confirm new password <confirmNewPassWord> in Form
#      But I enter "nothing to Confirm New Password"
#      Then I should see "confirmNewPassWord" message "Required" displayed for this "empty" field
#    And I click checkbox User's Roles "Administrators" "in Edit User Profile"
#    And I click Reset Button in Edit User Profile
#      Then I should see "firstName" message "Required" displayed for this "empty" field
#      Then I should see "lastName" message "Required" displayed for this "empty" field
#      Then I should see "emailAddress" message "Required" displayed for this "empty" field
#      Then I should see "newPassWord" message "Required" displayed for this "filled" field
#      Then I should see "confirmNewPassWord" message "Required" displayed for this "empty" field
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  Examples:
#  | firstName     | lastName  | emailAddress              | phoneNumber   | newPassWord    | confirmNewPassWord   |
##All Empty Fields
#  |               |           |                           |               |  Password1     |                      |
#
#
#  @TestCases_A-12
#  Scenario Outline: "@TestCases_A-12" (BB-287) Click "Reset" wont clear Error messages. (Edit User) [This changed 2-22-17 it should not erase "Require" in fields after reset button.firstName, lastName, emailAddress]
#    And I click Avatar Image Button
#    And I click My Profile sub menu from Avatar
#    And I click Edit Button in Edit User Profile
#    And I click Reset Button in Edit User Profile
#    And I enter my first name <firstName> in Form
#      But I enter "nothing to first name"
#      Then I should see "firstName" message "Required" displayed for this "empty" field
#    And I enter my last name <lastName> in Form
#      But I enter "nothing to last name"
#      Then I should see "lastName" message "Required" displayed for this "empty" field
#    And I enter my email address <emailAddress> in Form
#      But I enter "nothing to email address"
#      Then I should see "emailAddress" message "Required" displayed for this "empty" field
#    And I enter my phone number <phoneNumber> in Form
#    And I enter my Previous Password <previousPassWord> in Form
#    And I enter my new Password <newPassWord> in Form
#      But I enter "nothing to New Password"
#      Then I should see "newPassWord" message "Required" displayed for this "empty" field
#    And I enter my confirm new password <confirmNewPassWord> in Form
#      But I enter "nothing to Confirm New Password"
#      Then I should see "confirmNewPassWord" message "Required" displayed for this "empty" field
#    And I click checkbox User's Roles "Administrators" "in Edit User Profile"
#    And I click Reset Button in Edit User Profile
#      Then I should see "firstName" message "Required" displayed for this "empty" field
#      Then I should see "lastName" message "Required" displayed for this "empty" field
#      Then I should see "emailAddress" message "Required" displayed for this "empty" field
#      Then I should not see in "phoneNumber" errors displayed
#      Then I should not see in "previousPassWord" errors displayed
#      Then I should not see in "newPassWord" errors displayed
#      Then I should not see in "confirmNewPassWord" errors displayed
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#    Examples:
#      | firstName     | lastName  | emailAddress              | phoneNumber   |previousPassWord | newPassWord    | confirmNewPassWord   |
#    #All Empty Fields
#      |               |           |                           |               |  Password1      |                |                      |
#
#  @TestCases_A-13
#  Scenario: "@TestCases_A-13" (BB-416) Click "Admin" on top menu will open "Roles" page.
#    And I click on Admin Tab
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/dashboard" URL
#      #Then I should see that I am in "full" "autobahn.blackbookcloud.com/dashboard" URL
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-14
#  Scenario Outline: "@TestCases_A-15" (BB-459) "Previous Password" disappears when toggle from other User to "My profile".
#    When I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    #And I click Status Filter
#    And I enter Filter User List admintestemail1@yopmail.com in User List
#    And I click on Gear Icon 1 "admintestemail1@yopmail.com in User List"
#    And I click 1 View from Gear Icon in User List
#    And I click Edit Button in Edit User Profile
#      Then I should see user's "emailAddress" displayed in screen with value "admintestemail1@yopmail.com"
#    And I click Avatar Image Button
#    And I click My Profile sub menu from Avatar
#      Then I should see user's "emailAddress" displayed in screen with value "user1@example.com"
#    And I enter my Previous Password <previousPassWord> in Form
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  Examples:
#  |previousPassWord|
#  |  Password1     |
#
#  @TestCases_A-15
#  Scenario: "@TestCases_A-15" (BB-362) "View" for User list should be gray out (Permissions Not to Vew other users).(changed it will need permission not enforce currently)
#     #Require to have Role "Basic Role-No Permissions"
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#    #User2
#   #Added this to continue test if previous did not end
#    And  I reload "LogIn" page
#    And I enter my user email address editor@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    #And I click Status Filter
#    And I enter Filter User List user3@example.com in User List
#    And I click on Gear Icons 1 inactive "in User List"
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-16
#  Scenario: "@TestCases_A-16" (BB-246) Better vocabulary on Password send message
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#    And I click Forgot Password link
#    And I enter my email "user1@example.com" for Forgot Page
#    And I click Send Link button
#      Then I should see "Password reset email sent" displayed on "Login" popup
#
#  @TestCases_A-17
#  Scenario: "@TestCases_A-17" (BB-365) Pressing "Cancel wont exit Edit mode
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I click on New User Button in User List
#    And I click Cancel Button in Edit User Profile
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/user/list" URL
#      #Then I should see that I am in "full" "autobahn.blackbookcloud.com/user/list" URL
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-18
#  Scenario: "@TestCases_A-18" (BB-290) Logout account will not go back to Login page.
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#      #Then I should see that I am in "full" "autobahn.blackbookcloud.com/login" URL
#
#  @TestCases_A-19
#  Scenario: "@TestCases_A-19" (BB-245) Using a valid email will not show "Password reset email sent"
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#    And I click Forgot Password link
#    And I enter my email "admintestemail1@yopmail.com" for Forgot Page
#    And I click Send Link button
#      Then I should see "Password reset email sent" displayed on "Login" popup
#
#  @TestCases_A-20
#  Scenario: "@TestCases_A-20" (BB-476) "Role Market" dropdown box get clear after "Reset".
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 5 "Editor-Full-User in Role List"
#    And I click Edit from Gear Icon "in Role List"
#      Then I should see Role Market value "US Used Car"
#    And I click Reset Button in Edit Roles
#      Then I should see Role Market value "Select One"
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-21
#  Scenario: "@TestCases_A-21" (BB-414) Button "Save" is gray out in "Editing Roles".
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 5 "Editor-Full-User in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    And I clear text box selected "RoleName" in Role Editor
#    And I enter Role Name "Editor-Full-UserHIHI"
#      Then I should see in "Save" button "enable" in Edit Role
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-22
#  Scenario Outline: "@TestCases_A-22" (BB-480) Adding "Role" to new user (Add User) does not show "Require".
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I click on New User Button in User List
#    When I enter my first name <firstName> in Form
#    And I enter my last name <lastName> in Form
#    And I enter my email address <emailAddress> in Form
#      Then I should see "userrole" message "Required" displayed for this "unchecked" field
#    And I click checkbox User's Roles "Administrators" "in Edit User Profile"
#      Then I should not see in "userrole" errors displayed
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#    Examples:
#      | firstName      | lastName      | emailAddress |
#      |                |               |              |
#
#  @TestCases_A-23
#  Scenario Outline: "@TestCases_A-23" (BB-481) (security purpose) values for Password stay log in text box.
#    And I click Avatar Image Button
#    And I click My Profile sub menu from Avatar
#    And I click Edit Button in Edit User Profile
#    And I enter my new Password <newPassWord> in Form
#    And I enter my confirm new password <confirmNewPassWord> in Form
#    And I enter my Previous Password <previousPassWord> in Form
#    And I click Cancel Button in Edit User Profile
#    And I click Edit Button in Edit User Profile
#      Then I should see user's "previousPassWord" displayed in screen with value ""
#      Then I should see user's "newPassWord" displayed in screen with value ""
#      Then I should see user's "confirmNewPassWord" displayed in screen with value ""
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#    Examples:
#      |previousPassWord |newPassWord    | confirmNewPassWord   |
#
#      | QaAdmin         |  QaAdmi       |      Qa              |
#
#
#  @TestCases_A-24
#  Scenario: "@TestCases_A-24" (BB-460) Close "User Edit" wont go back from where it came from.
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I enter Filter User List admintestemail7@yopmail.com in User List
#    And I click on Gear Icon 1 "admintestemail7@yopmail.com in User List"
#    And I click Edit from Gear Icon "in User List"
#    And I click Cancel Button in Edit User Profile
#     Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/user/list" URL
#     #Then I should see that I am in "full" "autobahn.blackbookcloud.com/user/list" URL
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#    @TestCases_A-25
#  Scenario: "@TestCases_A-25" (BB-475) Dropdown boxes in Edit Role wont go to Default value after "Reset"
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 2 "AllPermissions in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    And I click Filter By Group dropdown "User" Permissions in Role Editor
#    And I click Filter By Status dropdown "Inactive" in Role Editor
#    And I click Reset Button in Edit Roles
#      Then I should see "All" display for Filter By Group in Role Editor
#      Then I should see "All" display for Filter By Status in Role Editor
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-26
#  Scenario: "@TestCases_A-26" (BB-477) "Filter Roles" in Edit Profile does not clear after click "Reset"
#    And I click Avatar Image Button
#    And I click My Profile sub menu from Avatar
#    And I click Edit Button in Edit User Profile
#    And I enter Filter Roles search "Editor" in Edit User Profile
#    And I click Reset Button in Edit User Profile
#      Then I should see user's "filterRoles" displayed in screen with value ""
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-27
#  Scenario: "@TestCases_A-27" (BB-519) Create "New Roles" not working.
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on New Role Button in Role List
#    And I enter Role Name "RoleName6"
#     #html has User as Value but Users as text.
#    And I click Filter By Group dropdown "User" Permissions in Role Editor
#    And I click checkbox  "0" "Users" Permission row in Role Editor
#    And I select Role Market "US Used Car" in Role Editor
#    And I click on Save button in Role Editor
#      Then I should see "Role has been successfully added" displayed on "EditRoles" popup
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#     @TestCases_A-28
#  Scenario: "@TestCases_A-28" (BB-441) Permissions gets reset after adding "Role's Users"  (re-Open)
#    #require @TestCases_A-27
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 6 "RoleName6 in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    And I enter "User1" on Filter Users in Role Editor
#    And I click checkbox on first user found from Filter Users in Role Editor
#       Then I should see in "Save" button "enable" in Edit Role
#    And I click on Save button in Role Editor
#      Then I should see "Role successfully updated" displayed on "EditRoles" popup
#       And I click Edit Button in Edit Roles
#    And I click Cancel Button from Edit Roles
#    And I click on Gear Icon 6 "RoleName6 in Role List"
#    And I click Edit from Gear Icon "in Role List"
#      Then I should see Permissions "Users" checkbox "checked" in Role Editor
#      Then I should see Permissions "Settings" checkbox "unchecked" in Role Editor
#      Then I should see Permissions "Roles" checkbox "unchecked" in Role Editor
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-29
#  Scenario: "@TestCases_A-29" (BB-472) Creating new Role will not add User to it.
#     #require @TestCases_A-28
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on New Role Button in Role List
#    And I enter Role Name "RoleName7"
#    And I enter "Users" on Filter Permissions in Role Editor
#    And I click checkbox  "0" "Users" Permission row in Role Editor
#    And I select Role Market "US Used Car" in Role Editor
#    And I enter "User1" on Filter Users in Role Editor
#    And I click checkbox on first user found from Filter Users in Role Editor
#    And I click on Save button in Role Editor
#      Then I should see "Role has been successfully added" displayed on "EditRoles" popup
#      Then I should see #of Users has increase value for "RoleName7" in Role List
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-30
#  Scenario: "@TestCases_A-30" (BB-473) Pop Menu Grammar error missing question mark "?" and role name (require TC-A-31)
#    #(BB-810)delete gear
#    #require @TestCases_A-29
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 7 "RoleName7 in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    And I enter "User1" on Filter Users in Role Editor
#    And I click checkbox on first user found from Filter Users in Role Editor
#    And I click on Save button in Role Editor
#    And I click Edit Button in Edit Roles
#    And I click Cancel Button from Edit Roles
#    And I click on Gear Icon 7 "RoleName7 in Role List"
#    And I click Delete from Gear Icon
#    #currently will order by default by number of users
#      Then I should see Are you sure you want to delete the role, "RoleName7?" This action can't be undone. displayed for Confirm Role Deletion in Role Editor
#    And I click "Cancel" Button for modal warning message from Edit Roles
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-31
#  Scenario: "@TestCases_A-31" (BB-474) (Delete Role): Wrong Error display after delete of "Role" (require TC-A-31,32)
#     #require @TestCases_A-30
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 7 "RoleName7 in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    And I click on Delete button in Role Editor
#    #currently will order by default by number of users
#      Then I should see Are you sure you want to delete the role, "RoleName7?" This action can't be undone. displayed for Confirm Role Deletion in Role Editor
#    And I click "Confirm" Button for modal warning message from Edit Roles
#      Then I should see "The Role has been successfully deleted" displayed on "EditRoles" popup
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-32
#    Scenario: "@TestCases_A-32" (BB-474) (Delete Role): Wrong Error display after delete of "Role" (require TC-A-31,32) Delete Created roles next run.
#     #require @TestCases_A-31
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 6 "RoleName6 in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    #Disable User
#    And I enter "User1" on Filter Users in Role Editor
#    And I click checkbox on first user found from Filter Users in Role Editor
#    And I click on Save button in Role Editor
#    And I click Edit Button in Edit Roles
#    And I click Cancel Button from Edit Roles
#    And I click on Gear Icon 6 "RoleName6 in Role List"
#    And I click Delete from Gear Icon
#     Then I should see Are you sure you want to delete the role, "RoleName6?" This action can't be undone. displayed for Confirm Role Deletion in Role Editor
#    And I click "Confirm" Button for modal warning message from Edit Roles
#      Then I should see "The Role has been successfully deleted" displayed on "EditRoles" popup
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-33
#  Scenario: "@TestCases_A-33" (BB-592) (Permission Add User): Add user is not enforce in database. (ROLE:EDITOR CVUL+CVOP+CVRL) "New User" button should not show.
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#    And I enter my user email address editor@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#     #Instead of hiddden button (grayout instead)
#      Then I should see in "NewUser" button "disable" in User List
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-34
#  Scenario: "@TestCases_A-34" (BB-582) (Add New Roles): word "Require" need to show on field require.
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on New Role Button in Role List
#    And I enter Role Name ""
#     Then I should see "RoleName" message "Required" displayed for this "empty" field in Role Editor
#     Then I should see "RoleMarket" message "Required" displayed for this "empty" field in Role Editor
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-35
#  Scenario: "@TestCases_A-35" (BB-586) (Role Market): Role Market needs to show "None" or a value in Role View.
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 2 "AllPermissions in Role List"
#    And I click 2 View from Gear Icon in Role List
#      Then I should see Role Market value "US Used Car"
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-36
#  Scenario: "@TestCases_A-36" (BB-616)(Add New Roles): Empty Space (SPACE BAR) gets accepted for role name.
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on New Role Button in Role List
#    And I enter Role Name "  "
#     Then I should see "RoleName" message "This is not a valid role title" displayed for this "filled" field in Role Editor
#     Then I should see "RoleMarket" message "Required" displayed for this "empty" field in Role Editor
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-37
#  Scenario: "@TestCases_A-37" (BB-655) (Edit Roles): Cant change "Role Market". Error Message
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 4 "Editor-Full_Roles in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    And I select Role Market "Canada Used Car" in Role Editor
#      Then I should see Role Market value "Canada Used Car"
#    And I click on Save button in Role Editor
#      Then I should see "Role successfully updated" displayed on "EditRoles" popup
#    And I click Edit Button in Edit Roles
#    And I click Cancel Button from Edit Roles
#    And I click on Gear Icon 4 "Editor-Full_Roles in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    And I select Role Market "US Used Car" in Role Editor
#      Then I should see Role Market value "US Used Car"
#    And I click on Save button in Role Editor
#      Then I should see "Role successfully updated" displayed on "EditRoles" popup
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#    #@TestCases_A-38-40 uses "Basic Role-No Permissions" to update permissions
#  @TestCases_A-38
#  Scenario: "@TestCases_A-38" (BB-626) (Permission canEditSettings): Enable "Settings" for a user will not show Tab "Settings"
#    #Dont take wait
#    And I wait
#    #Added this to continue test if previous did not end
#    And  I reload "LogIn" page
#    And I enter my user email address user2@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I click on Admin Tab
#      Then I should not see "Setting" Button in AdminTab
#   #Added this to continue test if previous did not end
#    And  I reload "LogIn" page
#    And I enter my user email address user1@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 3 "Basic Role-No Permissions in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    #Turn On "Settings" submenu
#    And I click checkbox Permission "Settings" in Role Editor
#    And I click on Save button in Role Editor
#      Then I should see "Role successfully updated" displayed on "EditRoles" popup
#    #Added this to continue test if previous did not end
#    And  I reload "LogIn" page
#    And I enter my user email address user2@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I click on Admin Tab
#    And I click on Settings submenu from Admin Tab
#    #Added this to continue test if previous did not end
#    And  I reload "LogIn" page
#    And I enter my user email address user1@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 3 "Basic Role-No Permissions in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    #Turn Off "Settings" submenu
#    And I click checkbox Permission "Settings" in Role Editor
#    And I click on Save button in Role Editor
#      Then I should see "Role successfully updated" displayed on "EditRoles" popup
#
#
#  #TODO I just took all wait here but not refatoring yet just want to run this
#     #@TestCases_A-38-40 uses "Basic Role-No Permissions" to update permissions
#  @TestCases_A-39
#  Scenario: "@TestCases_A-41" (BB-625) (Permission CanViewOtherUsers): Gear Icons are gray out event if permission is enable.
#    #USER 1
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 3  "Basic Role-No Permissions in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    #Enable Permission
#    And I click Filter By Group dropdown "User" Permissions in Role Editor
#    And I enter "Can View User List" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Can view User List" Permission row in Role Editor
#    And I clear text box selected "FilterPermissions" in Role Editor
#    And I click on Save button in Role Editor
#      Then I should see "Role successfully updated" displayed on "EditRoles" popup
#    #USER 2
#   #Added this to continue test if previous did not end
#    And  I reload "LogIn" page
#    And I enter my user email address user2@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    #And I click Status Filter
#    And I enter Filter User List user3@example.com in User List
#    And I click on Gear Icons 1 inactive "in User List"
#    #USER 1
#   #Added this to continue test if previous did not end
#    And  I reload "LogIn" page
#    And I enter my user email address user1@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 3  "Basic Role-No Permissions in Role List"
#    And I click Edit from Gear Icon "in Role List"
#     #Enable Permission
#    And I click Filter By Group dropdown "User" Permissions in Role Editor
#    And I enter "Can View Other Users" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Can View Other Users" Permission row in Role Editor
#    And I clear text box selected "FilterPermissions" in Role Editor
#     #Enable Permission
#    And I click Filter By Group dropdown "Roles" Permissions in Role Editor
#    And I enter "can View Role List" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "can View Role List" Permission row in Role Editor
#    And I click on Save button in Role Editor
#      Then I should see "Role successfully updated" displayed on "EditRoles" popup
#     #USER 2
#   #Added this to continue test if previous did not end
#    And  I reload "LogIn" page
#    And I enter my user email address user2@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    #And I click Status Filter
#    And I enter Filter User List user3@example.com in User List
#    And I click on Gear Icon 1 "user3@example.com in User List"
#    And I click 1 View from Gear Icon in User List
#      Then I should see user's "emailAddress" displayed in screen with value "user3@example.com"
#     #USER 1   disable all permission Basic Account
#    #Added this to continue test if previous did not end
#    And  I reload "LogIn" page
#    And I enter my user email address user1@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 3  "Basic Role-No Permissions in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    #Disable Permission
#    And I click Filter By Group dropdown "User" Permissions in Role Editor
#    And I enter "Can View Other Users" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Can View Other Users" Permission row in Role Editor
#    And I clear text box selected "FilterPermissions" in Role Editor
#     #Disable Permission
#    And I click Filter By Group dropdown "Roles" Permissions in Role Editor
#    And I enter "can View Role List" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "can View Role List" Permission row in Role Editor
#    And I clear text box selected "FilterPermissions" in Role Editor
#     #Disable Permission
#    And I click Filter By Group dropdown "User" Permissions in Role Editor
#    And I enter "Can View User List" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Can view User List" Permission row in Role Editor
#    And I clear text box selected "FilterPermissions" in Role Editor
#    And I click on Save button in Role Editor
#      Then I should see "Role successfully updated" displayed on "EditRoles" popup
#
#     #@TestCases_A-38-40 uses "Basic Role-No Permissions" to update permissions
#  @TestCases_A-40
#  Scenario: "@TestCases_A-40" (BB-624) (Permission CanResetUsersPasswords): Unselected permission "Can Reset Users Passwords" can still add password to user.
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 3  "Basic Role-No Permissions in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    #Enable Permission
#    And I click Filter By Group dropdown "User" Permissions in Role Editor
#    And I enter "Can Add/Edit Users" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Can Add/Edit Users" Permission row in Role Editor
#    And I clear text box selected "FilterPermissions" in Role Editor
#     #Enable Permission
#    And I enter "Can View Other Users" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Can View Other Users" Permission row in Role Editor
#    And I clear text box selected "FilterPermissions" in Role Editor
#     #Enable Permission
#    And I enter "Can View User List" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Can View User List" Permission row in Role Editor
#    And I click on Save button in Role Editor
#      Then I should see "Role successfully updated" displayed on "EditRoles" popup
#    #Added this to continue test if previous did not end
#    And  I reload "LogIn" page
#    And I enter my user email address user2@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    #And I click Status Filter
#    And I enter Filter User List user3@example.com in User List
#    And I click on Gear Icon 1 "user3@example.com in User List"
#    And I click Edit from Gear Icon "in User List"
#      Then I should not see "NewPassword" "Textbox" in Edit Profile
#   #Added this to continue test if previous did not end
#    And  I reload "LogIn" page
#    And I enter my user email address user1@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 3  "Basic Role-No Permissions in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    #Enable Permission
#    And I click Filter By Group dropdown "User" Permissions in Role Editor
#    And I enter "Can Reset Users Passwords" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Can Reset Users Passwords" Permission row in Role Editor
#    And I clear text box selected "FilterPermissions" in Role Editor
#    And I click on Save button in Role Editor
#      Then I should see "Role successfully updated" displayed on "EditRoles" popup
#    #Added this to continue test if previous did not end
#    And  I reload "LogIn" page
#    And I enter my user email address user2@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    #And I click Status Filter
#    And I enter Filter User List user3@example.com in User List
#    And I click on Gear Icon 1 "user3@example.com in User List"
#    And I click Edit from Gear Icon "in User List"
#    And I enter my new Password Password1 in Form
#    #Added this to continue test if previous did not end
#    And  I reload "LogIn" page
#    And I enter my user email address user1@example.com in Login
#    And I enter my Password Password1 in Login
#    And I click Login Button
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 3  "Basic Role-No Permissions in Role List"
#    And I click Edit from Gear Icon "in Role List"
#    #Disable Permission
#    And I click Filter By Group dropdown "User" Permissions in Role Editor
#    And I enter "Can Add/Edit Users" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Can Add/Edit Users" Permission row in Role Editor
#    And I clear text box selected "FilterPermissions" in Role Editor
#     #Disable Permission
#    And I enter "Can View Other Users" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Can View Other Users" Permission row in Role Editor
#    And I clear text box selected "FilterPermissions" in Role Editor
#     #Disable Permission
#    And I enter "Can Reset Users Passwords" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Can Reset Users Passwords" Permission row in Role Editor
#    And I clear text box selected "FilterPermissions" in Role Editor
#     #Disable Permission
#    And I enter "Can View User List" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Can View User List" Permission row in Role Editor
#    And I clear text box selected "FilterPermissions" in Role Editor
#    And I click on Save button in Role Editor
#      Then I should see "Role successfully updated" displayed on "EditRoles" popup
#
#  @TestCases_A-41
#  Scenario: "@TestCases_A-41" (BB-471) Gray out "Active Status" in "View" user mode. (make sure is not editable)
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    #And I click Status Filter
#    And I enter Filter User List user3@example.com in User List
#    And I click on Gear Icon 1 "user3@example.com in User List"
#    And I click 1 View from Gear Icon in User List
#    And I click User Active checkbox
#      Then I should see on User Active checkbox inactive
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#
#  @TestCases_A-42
#  Scenario: "@TestCases_A-42" (BB-348) Using basic ULR will load Dashboard instead of Login page.
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#    And I reload "https://qa-autobahn.blackbookcloud.com" page
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    #And I reload "https://autobahn.blackbookcloud.com" page
#      #Then I should see that I am in "full" "autobahn.blackbookcloud.com/login" URL
#
#     #TODO aqui
#  @TestCases_A-43
#  Scenario: "@TestCases_A-43" (BB-254) Using URL directory bypass Login process
#    And I click Avatar Image Button
#    And I click Logout sub menu from Avatar
#    #HOME
#    And I reload "https://qa-autobahn.blackbookcloud.com/dashboard" page
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
##    And I reload  "https://autobahn.blackbookcloud.com/dashboard" page
##      Then I should see that I am in "full" "autobahn.blackbookcloud.com/login" URL
#    #ROLE
#    And I reload "https://qa-autobahn.blackbookcloud.com/role/list" page
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload "https://qa-autobahn.blackbookcloud.com/role" page
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload "https://qa-autobahn.blackbookcloud.com/role/2" page
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload "https://qa-autobahn.blackbookcloud.com/role/2?edit=true" page
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
##    And I reload  "https://autobahn.blackbookcloud.com/role/list" page
##      Then I should see that I am in "full" "autobahn.blackbookcloud.com/login" URL
##    And I reload "https://autobahn.blackbookcloud.com/role" page
##      Then I should see that I am in "full" "autobahn.blackbookcloud.com/login" URL
##    And I reload "https://autobahn.blackbookcloud.com/role/2" page
##      Then I should see that I am in "full" "autobahn.blackbookcloud.com/login" URL
##    And I reload "https://autobahn.blackbookcloud.com/role/2?edit=true" page
##      Then I should see that I am in "full" "autobahn.blackbookcloud.com/login" URL
#    #USER
#    And I reload "https://qa-autobahn.blackbookcloud.com/user/list" page
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload "https://qa-autobahn.blackbookcloud.com/user" page
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload "https://qa-autobahn.blackbookcloud.com/user/6" page
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload "https://qa-autobahn.blackbookcloud.com/user/6?edit=true" page
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload "https://qa-autobahn.blackbookcloud.com/settings" page
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
##    And I reload "https://autobahn.blackbookcloud.com/user/list" page
##      Then I should see that I am in "full" "autobahn.blackbookcloud.com/login" URL
##    And I reload "https://autobahn.blackbookcloud.com/user" page
##      Then I should see that I am in "full" "autobahn.blackbookcloud.com/login" URL
##    And I reload "https://autobahn.blackbookcloud.com/user/6" page
##      Then I should see that I am in "full" "autobahn.blackbookcloud.com/login" URL
##    And I reload "https://autobahn.blackbookcloud.com/user/6?edit=true" page
##      Then I should see that I am in "full" "autobahn.blackbookcloud.com/login" URL
##    And I reload "https://autobahn.blackbookcloud.com/settings" page
##      Then I should see that I am in "full" "autobahn.blackbookcloud.com/login" URL
#    #Segment
#    And I reload "https://qa-autobahn.blackbookcloud.com/segments/list" page
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
#    And I reload "https://qa-autobahn.blackbookcloud.com/segments" page
#      Then I should see that I am in "full" "qa-autobahn.blackbookcloud.com/login" URL
##    And I reload "https://autobahn.blackbookcloud.com/segments/list" page
##     Then I should see that I am in "full" "autobahn.blackbookcloud.com/login" URL
##    And I reload "https://autobahn.blackbookcloud.com/segments" page
##     Then I should see that I am in "full" "autobahn.blackbookcloud.com/login" URL
#

  @TestCases_A-44
  Scenario: "@TestCases_A-44" (BB-517) Able to CREATE Empty string (SPACE BAR) for Segment Name
   #(BB-580) Require
    And I click on Segment Tab
    And I click on Add submenu from Segment Tab
      Then I should see "SegmentName" message "Required" displayed for this "empty" field
      Then I should see in "Save" button "disable" in Edit Segment
      Then I should see in "AddQuery" button "disable" in Edit Query Segment
    And I enter Segment Name "SegmentName"
    And I click on Save button in Edit Segment
      Then I should see "Segment saved successfully" displayed on "EditSegment" popup
      Then I should see in "AddQuery" button "enable" in Edit Query Segment
    And I click Add Query Button in Edit Segment
      Then I should see "QueryName" message "Required" displayed for this "empty" field
      Then I should see "QueryFilter" message "Required" displayed for this "empty" field
    And I enter Query Name "QueryName"
    And I click Circle icon in Filter grid to 2 "Make" in Edit Query
    And I click checkbox Make "Acura" in Edit Query
    And I click on More submenu from Make in Edit Query
      Then I should see Add More Filters "Acura" checkbox "checked" in Role Editor
    And I click Apply Button from Add More Filters menu
    And I click on Add/Save Query button in Edit Query
      Then I should see "QueryName query was successfully saved" displayed on "EditSegment" popup
    And I click on Segment Tab
    And I click on Open submenu from Segment Tab
    And I click on Gear Icon 1 "SegmentName" in Open Segment
    And I click Edit in submenu from Gear Icon
    And I click Edit Button in Edit Segments
    And I clear text box selected "SegmentName" in Segment Editor
      Then I should see "SegmentName" message "Required" displayed for this "filled" field
      Then I should see in "Save" button "disable" in Edit Segment
    And I enter Segment Name "  "
      Then I should see "SegmentName" message "This is not a valid segment title" displayed for this "empty" field
      Then I should see in "Save" button "disable" in Edit Segment

  @TestCases_A-45
  Scenario: "@TestCases_A-45"  (BB-599) (Add Query): Adding Acura is not selected in "More" menu.
    And I click on Segment Tab
    And I click on Open submenu from Segment Tab
    And I click on Gear Icon 1 "SegmentName" in Open Segment
    And I click Edit in submenu from Gear Icon
    And I click + icon for Queries in Edit Segments
    And I click Edit Button for Queries in Edit Segment
    And I click Circle icon in Filter grid to 1 "Make" in Edit Query
    And I click on More submenu from Make in Edit Query
      Then I should see Add More Filters "Acura" checkbox "checked" in Role Editor
    And I click Cancel Button from Add More Filters menu
    And I click on Add/Save Query button in Edit Query
      Then I should see "QueryName Update Successfull" displayed on "EditSegment" popup

  @TestCases_A-46
  Scenario: "@TestCases_A-46" (BB-513) (Segment- Edit): Adding User for "Share Users" clears user in list.
    And I click on Segment Tab
    And I click on Open submenu from Segment Tab
    And I click on Gear Icon 1 "SegmentName" in Open Segment
    And I click Edit in submenu from Gear Icon
    And I click Edit Button in Edit Segments
    And I click Shared Users Button in Edit Segments
    And I enter Filter Edit Shared Users User2 in Edit Segment
    #change location name and use same sentence  "in Edit Segment"
    And I click checkbox on first user found from Filter Users in Role Editor
      Then I should see Filter Edit Shared Users "Person" User2 checkbox "checked" in Edit Segments
    And I click Add Button for Edit Shared User popup in Edit Segments
    And I click Shared Users Button in Edit Segments
    And I enter Filter Edit Shared Users User2 in Edit Segment
      Then I should see Filter Edit Shared Users "Person" User2 checkbox "checked" in Edit Segments
      Then I should see Filter Edit Shared Users "WriteAccess" Administrator checkbox "unchecked" in Edit Segments
      Then I should see Filter Edit Shared Users "AdjustAccess" Administrator checkbox "unchecked" in Edit Segments
    And I click Cancel Button for Edit Shared User popup in Edit Segments
    And I click on Save button in Edit Segment
      Then I should see "Segment updated successfully" displayed on "EditSegment" popup
    And I click on Segment Tab
    And I click on Open submenu from Segment Tab
    And I click on Gear Icon 1 "SegmentName" in Open Segment
    And I click Edit in submenu from Gear Icon
    And I click Edit Button in Edit Segments
    And I click Shared Users Button in Edit Segments
    And I enter Filter Edit Shared Users User2 in Edit Segment
      Then I should see Filter Edit Shared Users "Person" User2 checkbox "checked" in Edit Segments
      Then I should see Filter Edit Shared Users "WriteAccess" Administrator checkbox "unchecked" in Edit Segments
      Then I should see Filter Edit Shared Users "AdjustAccess" Administrator checkbox "unchecked" in Edit Segments

  @TestCases_A-47
  Scenario: "@TestCases_A-47" (BB-514) (Segment- Edit): Shared Users button disappears when pressing "Reset" button.
    And I click on Segment Tab
    And I click on Open submenu from Segment Tab
    And I click on Gear Icon 1 "SegmentName" in Open Segment
    And I click Edit in submenu from Gear Icon
    And I click Edit Button in Edit Segments
    And I click on Reset button in Edit Segment
      Then I should see in "SharedUsers" button "enable" in Edit Segments

     #TODO aqui
  @TestCases_A-48
  Scenario: "@TestCases_A-48" (BB-581) (Segment- Edit): Not able to add  more than 2 user with "Write Access" in share user segment.
    And I click on Segment Tab
    And I click on Open submenu from Segment Tab
    And I click on Gear Icon 1 "SegmentName" in Open Segment
    And I click Edit in submenu from Gear Icon
    Then I store value Count "SharedUsers" displayed in Edit Segments
    And I click Edit Button in Edit Segments
    And I click Shared Users Button in Edit Segments
    And I enter Filter Edit Shared Users Administrator in Edit Segment
    #change location name and use same sentence  "in Edit Segment"
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click checkbox on "WriteAccess" user found from Filter Users in Edit Segments
    And I click checkbox on "AdjustAccess" user found from Filter Users in Edit Segments
    Then I should see Filter Edit Shared Users "Person" Administrator checkbox "checked" in Edit Segments
    Then I should see Filter Edit Shared Users "WriteAccess" Administrator checkbox "checked" in Edit Segments
    Then I should see Filter Edit Shared Users "AdjustAccess" Administrator checkbox "checked" in Edit Segments
    Then I should see in "SharedUsers" button "enable" in Edit Segments
    And I click Add Button for Edit Shared User popup in Edit Segments
    Then I should see Count has increase value for "SharedUsers" in Edit Segments
    And I click on Save button in Edit Segment
    Then I should see "Segment updated successfully" displayed on "EditSegment" popup
    #dont Take out wait
    And I wait
    And I click Edit Button in Edit Segments
    And I click Shared Users Button in Edit Segments
    And I enter Filter Edit Shared Users All in Edit Segment
    #change location name and use same sentence  "in Edit Segment"
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click checkbox on "WriteAccess" user found from Filter Users in Edit Segments
    And I click checkbox on "AdjustAccess" user found from Filter Users in Edit Segments
    Then I should see Filter Edit Shared Users "Person" All checkbox "checked" in Edit Segments
    Then I should see Filter Edit Shared Users "WriteAccess" All checkbox "checked" in Edit Segments
    Then I should see Filter Edit Shared Users "AdjustAccess" All checkbox "checked" in Edit Segments
    And I click Add Button for Edit Shared User popup in Edit Segments
    And I click on Save button in Edit Segment
    Then I should see "Segment updated successfully" displayed on "EditSegment" popup
    #dont Take out wait
    And I wait
    And I click Edit Button in Edit Segments
    And I click Shared Users Button in Edit Segments
    And I enter Filter Edit Shared Users Editor in Edit Segment
    #change location name and use same sentence  "in Edit Segment"
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click checkbox on "WriteAccess" user found from Filter Users in Edit Segments
    And I click checkbox on "AdjustAccess" user found from Filter Users in Edit Segments
    Then I should see Filter Edit Shared Users "Person" Editor checkbox "checked" in Edit Segments
    Then I should see Filter Edit Shared Users "WriteAccess" Editor checkbox "checked" in Edit Segments
    Then I should see Filter Edit Shared Users "AdjustAccess" Editor checkbox "checked" in Edit Segments
    And I click Add Button for Edit Shared User popup in Edit Segments
    And I click on Save button in Edit Segment
    Then I should see "Segment updated successfully" displayed on "EditSegment" popup
     #dont Take out wait
    And I wait
    And I click Edit Button in Edit Segments
    And I click Shared Users Button in Edit Segments
    And I enter Filter Edit Shared Users Administrator in Edit Segment
    Then I should see Filter Edit Shared Users "Person" Administrator checkbox "checked" in Edit Segments
    Then I should see Filter Edit Shared Users "WriteAccess" Administrator checkbox "checked" in Edit Segments
    Then I should see Filter Edit Shared Users "AdjustAccess" Administrator checkbox "checked" in Edit Segments
    And I clear text box selected "SearchUsers" in Segment Editor
    And I enter Filter Edit Shared Users All in Edit Segment
    Then I should see Filter Edit Shared Users "Person" All checkbox "checked" in Edit Segments
    Then I should see Filter Edit Shared Users "WriteAccess" All checkbox "checked" in Edit Segments
    Then I should see Filter Edit Shared Users "AdjustAccess" All checkbox "checked" in Edit Segments
    And I clear text box selected "SearchUsers" in Segment Editor
    And I enter Filter Edit Shared Users Editor in Edit Segment
    Then I should see Filter Edit Shared Users "Person" Editor checkbox "checked" in Edit Segments
    Then I should see Filter Edit Shared Users "WriteAccess" Editor checkbox "checked" in Edit Segments
    Then I should see Filter Edit Shared Users "AdjustAccess" Editor checkbox "checked" in Edit Segments