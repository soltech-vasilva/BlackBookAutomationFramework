###################################
#               BUG               #
###################################

Feature:  "Verify that this bugs dont return to the application."

  Rules: Verify "User List" opens

  Question:


  Background:

    Given I enter BlackBook Login Website
       #BUG ADDED THIS TO CONTINUE
       ## bug that bypasses login happens only in desktop catches issues (it thinks is login) , browserstack works fine
    And I reload page "http://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address user1@example.com
    And I enter my Password Password1
    And I click Login Button

#######################################################################################################################
#                                             Test cases A                                                            #
#######################################################################################################################

#  @TestCases_A-1
#  Scenario: "@TestCases_A-1" (BB-368) Verify current User can see current profile after seen other user's profile.(same component call "Caching issues")
#    When I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I wait
#    And I enter filter value admintestemail1@yopmail.com
#    And I click on Gear Icon 0
#    And I click View from Gear Icon
#    And I wait
#    And I click Edit Button
#    And I wait
#      Then I should see user's "emailAddress" displayed in screen with value "admintestemail1@yopmail.com"
#    And I click Profile Button
#    And I click My Profile sub menu
#    And I wait
#      Then I should see user's "emailAddress" displayed in screen with value "user1@example.com"
#    And I click Profile Button
#    And I click Logout sub menu
#
#  @TestCases_A-2
#  Scenario: "@TestCases_A-2" (BB-384) Verify current User information is not deleted from UI if "RESET"->"CANCEL"
#    And I click Profile Button
#    And I click My Profile sub menu
#      Then I should see user's "emailAddress" displayed in screen with value "user1@example.com"
#    And I click Edit Button
#    And I click Reset Button
#    And I wait
#    And I click Cancel Button
#      Then I should see user's "emailAddress" displayed in screen with value "user1@example.com"
#    And I wait
#    And I click Profile Button
#    And I click Logout sub menu
#
#  @TestCases_A-3
#  Scenario Outline: "@TestCases_A-3" (BB-367) Modify New Password as same Confirm Password cant click "SAVE" button to create user.
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I wait
#    And I click on New User Button
#    When I enter my first name <firstName>
#    Then I should not see in "firstName" errors displayed
#    And I enter my last name <lastName>
#    Then I should not see in "lastName" errors displayed
#    And I enter my email address <emailAddress>
#    Then I should not see in "emailAddress" errors displayed
#    And I enter my phone number <phoneNumber>
#    Then I should not see in "phoneNumber" errors displayed
#    And I enter my new Password <newPassWord>
#    Then I should not see in "newPassWord" errors displayed
#    And I enter my confirm new password <confirmNewPassWord>
#    Then I should not see in "confirmNewPassWord" errors displayed
#    And I add extra string "1" to my "newPassWord"
#    And I delete the amount "1" characters from my "newPassWord"
#    And I wait
#      Then I should see in "<string>" "<string>"
#
#    Examples:
#      | firstName      | lastName      | emailAddress                  |phoneNumber    | newPassWord | confirmNewPassWord |
##Valid 26 Users input
#      |   firstName27  | lastName27    | admintestemail27@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |

#    @TestCases_A-4
#  Scenario: "@TestCases_A-4" (BB-413) Click "Save" twice in Edit Role list will show error (weird state).
#    And I click on Admin Tab
#      And I wait
#    And I click on Roles submenu from Admin Tab
#    And I wait
#    And I click on Gear Icon 1
#    And I click Edit from Gear Icon
#    And I wait
#    And I click on Save button in Role Editor
#    And I wait
#    And I click X on Message Popup
#    And I wait
#    And I add Permission "Settings"
#    And I click on Save button in Role Editor
#    And I wait
#      Then I should see "Role Update Successful" displayed on "EditRoles" popup
#    And I wait
#    And I click X on Message Popup
#    And I wait

#  @TestCases_A-5
#  Scenario: "@TestCases_A-5" (BB-247) Entering credential will not go straight to "Home" page.
#      And I wait
#      And I verify that I am in "qa-autobahn.blackbookcloud.com/dashboard" URL
#      And I wait
#
#  @TestCases_A-6
#  Scenario: "@TestCases_A-6" (BB-360) Active Status is editable by user.
#      And I reload page "http://qa-autobahn.blackbookcloud.com/login"
#      And I wait
#      And I enter my user email address user2@example.com
#      And I enter my Password Password1
#      And I click Login Button
#      And I wait
#      And I click Profile Button
#      And I click My Profile sub menu
#      And I click Edit Button
#      And I wait
#      And I click User Active checkbox
#      And I wait
#      Then Verify status on User Active checkbox
#
#  @TestCases_A-7
#  Scenario: "@TestCases_A-7" (BB-381) Click "Refresh" on "User List" will show blue background.
#      And I wait
#      And I verify that I am in "qa-autobahn.blackbookcloud.com/dashboard" URL
#      And I wait
#      And I click on Home Tab
#      And I click Refresh
#      And I wait
#      And I verify that I am in "qa-autobahn.blackbookcloud.com/dashboard" URL
#      And I click on Home Tab
#      And I click Profile Button
#      And I click My Profile sub menu
#      And I wait
#      And I click Refresh
#      And I wait
#      And I verify that I am in "qa-autobahn.blackbookcloud.com/user/1" URL
#      And I click Edit Button

#  @TestCases_A-8
#  Scenario: "@TestCases_A-8" (BB-385) Upper Case sensitive on "Filter on User List".
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I click Status Filter
#    And I enter filter value admintestemail6@yopmail.com
#    And I click Inactive in submenu from Status Filter
#    And I click on Gear Icon 0
#    And I click Edit from Gear Icon
#    And I should see user's "emailAddress" displayed in screen with value "admintestemail6@yopmail.com"
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I click Status Filter
#    And I enter filter value AdminTestEmail6@Yopmail.Com
#    And I click Inactive in submenu from Status Filter
#    And I click on Gear Icon 0
#    And I click Edit from Gear Icon
#    Then I should see user's "emailAddress" displayed in screen with value "admintestemail6@yopmail.com"
#    And I wait


#  @TestCases_A-9
#  Scenario: "@TestCases_A-9" (BB-397) "Cancel" button wont exit out from "New Role" page.
#    And I wait
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 1
#    And I click Edit from Gear Icon
#    And I wait
#    And  I click Cancel Button from Edit Roles
#    And I wait
#    And I verify that I am in "qa-autobahn.blackbookcloud.com/role/list" URL
#    And I wait

#  @TestCases_A-10
#  Scenario: "@TestCases_A-10" (BB-398) Gear Icon stop working after exiting "New Role" page
#    And I wait
#    And I click on Admin Tab
#    And I click on Roles submenu from Admin Tab
#    And I click on Gear Icon 1
#    And I click Edit from Gear Icon
#    And I wait
#    And  I click Cancel Button from Edit Roles
#    And I wait
#    And I verify that I am in "qa-autobahn.blackbookcloud.com/role/list" URL
#    And I wait
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I wait
#    And I enter filter value admintestemail6@yopmail.com
#    And I click on Gear Icon 0
#    And I verify User List Edit sub-menu options
#
#
#  @TestCases_A-11
#  Scenario: "@TestCases_A-11" (BB-388) "Delete" sub menu on "User List" is missing from menu. (it only needs 3 items)
#    And I wait
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I wait
#    And I enter filter value admintestemail6@yopmail.com
#    And I click on Gear Icon 0
#    And I verify User List Edit sub-menu options



#  @TestCases_A-12
#  Scenario Outline: "@TestCases_A-12" (BB-399) Click "Reset" wont clear Error messages (Add User)
#    And I wait
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I click on New User Button
#    And I wait
#    And I enter my first name <firstName>
#      But I enter "nothing to first name"
#      Then I should see "firstName" message "Required" displayed for this "empty" field
#    And I enter my last name <lastName>
#      But I enter "nothing to last name"
#      Then I should see "lastName" message "Required" displayed for this "empty" field
#    And I enter my email address <emailAddress>
#      But I enter "nothing to email address"
#      Then I should see "emailAddress" message "Required" displayed for this "empty" field
#    And I enter my phone number <phoneNumber>
#    And I enter my new Password <newPassWord>
#      #there is bug were there is no Require showing so I added value for new password to show error on new password
#      #But I enter "nothing to New Password"
#      #Then I should see "newPassWord" message "Required" displayed for this "empty" field
#    And I enter my confirm new password <confirmNewPassWord>
#      But I enter "nothing to Confirm New Password"
#      Then I should see "confirmNewPassWord" message "Required" displayed for this "empty" field
#    And I click Reset Button
#      Then I should not see in "firstName" errors displayed
#      Then I should not see in "lastName" errors displayed
#      Then I should not see in "emailAddress" errors displayed
#      Then I should not see in "phoneNumber" errors displayed
#      Then I should not see in "previousPassWord" errors displayed
#      Then I should not see in "newPassWord" errors displayed
#      Then I should not see in "confirmNewPassWord" errors displayed
#
#  Examples:
#  | firstName     | lastName  | emailAddress              | phoneNumber   | newPassWord    | confirmNewPassWord   |
##All Empty Fields
#  |               |           |                           |               |  Password1     |                      |
#
#
#
#  @TestCases_A-13
#  Scenario Outline: "@TestCases_A-13" (BB-287) Click "Reset" wont clear Error messages. (Edit User)
#    And I wait
#    And I click Profile Button
#    And I click My Profile sub menu
#    And I wait
#    And I click Edit Button
#    And I click Reset Button
#    And I enter my first name <firstName>
#    But I enter "nothing to first name"
#    Then I should see "firstName" message "Required" displayed for this "empty" field
#    And I enter my last name <lastName>
#    But I enter "nothing to last name"
#    Then I should see "lastName" message "Required" displayed for this "empty" field
#    And I enter my email address <emailAddress>
#    But I enter "nothing to email address"
#    Then I should see "emailAddress" message "Required" displayed for this "empty" field
#    And I enter my phone number <phoneNumber>
#    And I enter my Previous Password <previousPassWord>
#    And I enter my new Password <newPassWord>
#    But I enter "nothing to New Password"
#    Then I should see "newPassWord" message "Required" displayed for this "empty" field
#    And I enter my confirm new password <confirmNewPassWord>
#    But I enter "nothing to Confirm New Password"
#    Then I should see "confirmNewPassWord" message "Required" displayed for this "empty" field
#    And I click Reset Button
#    Then I should not see in "firstName" errors displayed
#    Then I should not see in "lastName" errors displayed
#    Then I should not see in "emailAddress" errors displayed
#    Then I should not see in "phoneNumber" errors displayed
#    Then I should not see in "previousPassWord" errors displayed
#    Then I should not see in "newPassWord" errors displayed
#    Then I should not see in "confirmNewPassWord" errors displayed
#
#    Examples:
#      | firstName     | lastName  | emailAddress              | phoneNumber   |previousPassWord | newPassWord    | confirmNewPassWord   |
#    #All Empty Fields
#      |               |           |                           |               |  Password1      |                |                      |


#
#  @TestCases_A-14
#  Scenario: "@TestCases_A-14" (BB-416) Click "Admin" on top menu will open "Roles" page.
#    And I wait
#    And I click on Admin Tab
#    And I verify that I am in "qa-autobahn.blackbookcloud.com/dashboard" URL
#    And I wait


#  @TestCases_A-15
#  Scenario Outline: "@TestCases_A-15" (BB-459) "Previous Password" disappears when toggle from other User to "My profile".
#    And I wait
#    When I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I wait
#    And I click Status Filter
#    And I enter filter value admintestemail1@yopmail.com
#    And I click on Gear Icon 0
#    And I click View from Gear Icon
#    And I wait
#    And I click Profile Button
#    And I click Edit Button
#      Then I should see user's "emailAddress" displayed in screen with value "admintestemail1@yopmail.com"
#    And I click Profile Button
#    And I click My Profile sub menu
#    And I wait
#      Then I should see user's "emailAddress" displayed in screen with value "user1@example.com"
#    And I click Edit Button
#    And I wait
#    And I enter my Previous Password <previousPassWord>
#
#  Examples:
#  |previousPassWord|
#  |                |



  @TestCases_A-16
  Scenario: "@TestCases_A-16" (BB-362) "View" for User list should be gray out (Permissions Not to Vew other users).
    And I reload page "http://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address user3@example.com
    And I enter my Password Password1
    And I click Login Button
    And I wait
    When I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
    And I click Status Filter
    And I enter filter value user2@example.com
    And I click on Gear Icons 0 inactive
    And I wait
    And I click Profile Button











#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I wait
#    And I enter filter value user1@example.com
#    And I click on Gear Icon 0
#    And I click Edit from Gear Icon
#    And I wait
#    And I click User Active checkbox
#    And I wait
#    Then Verify status on User Active checkbox
#    And I wait



