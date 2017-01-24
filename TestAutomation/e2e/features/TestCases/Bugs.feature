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
    And I enter my user email address user3@example.com
    And I enter my Password Password1
    And I click Login Button

#######################################################################################################################
#                                             Test cases A                                                            #
#######################################################################################################################

  @TestCases_A-1
  Scenario: "@TestCases_A-1" (BB-368) Verify current User can see current profile after seen other user's profile.(same component call "Caching issues")
    When I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
    And I enter filter value admintestemail1@yopmail.com
    And I click on Gear Icon 0
    And I click View from Gear Icon
    And I wait
    And I click Edit Button
    And I wait
      Then I should see user's "emailAddress" displayed in screen with value "admintestemail1@yopmail.com"
    And I click Profile Button
    And I click My Profile sub menu
    And I wait
      Then I should see user's "emailAddress" displayed in screen with value "user3@example.com"
    And I click Profile Button
    And I click Logout sub menu

  @TestCases_A-2
  Scenario: "@TestCases_A-2" (BB-384) Verify current User information is not deleted from UI if "RESET"->"CANCEL"
    And I click Profile Button
    And I click My Profile sub menu
      Then I should see user's "emailAddress" displayed in screen with value "user3@example.com"
    And I click Edit Button
    And I click Reset Button
    And I wait
    And I click Cancel Button
      Then I should see user's "emailAddress" displayed in screen with value "user3@example.com"
    And I wait
    And I click Profile Button
    And I click Logout sub menu

  @TestCases_A-3
  Scenario Outline: "@TestCases_A-3" (BB-367) Modify New Password as same Confirm Password cant click "SAVE" button to create user.
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I wait
    And I click on New User Button
    When I enter my first name <firstName>
    Then I should not see in "firstName" errors displayed
    And I enter my last name <lastName>
    Then I should not see in "lastName" errors displayed
    And I enter my email address <emailAddress>
    Then I should not see in "emailAddress" errors displayed
    And I enter my phone number <phoneNumber>
    Then I should not see in "phoneNumber" errors displayed
    And I enter my new Password <newPassWord>
    Then I should not see in "newPassWord" errors displayed
    And I enter my confirm new password <confirmNewPassWord>
    Then I should not see in "confirmNewPassWord" errors displayed
    And I add extra string "1" to my "newPassWord"
    And I delete the amount "1" characters from my "newPassWord"
    And I wait
    And I wait
    And I wait
      Then I should see in "<string>" "<string>"

    Examples:
      | firstName      | lastName      | emailAddress                  |phoneNumber    | newPassWord | confirmNewPassWord |
#Valid 26 Users input
      |   firstName27  | lastName27    | admintestemail27@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |

    @TestCases_A-4
  Scenario: "@TestCases_A-4" (BB-413) Click "Save" twice in Edit Role list will show error (weird state).
    And I click on Admin Tab
      And I wait
    And I click on Roles submenu from Admin Tab
    And I wait
    And I click on Gear Icon 1
    And I click Edit from Gear Icon
    And I wait
    And I click on Save button in Role Editor
    And I wait
    And I click X on Message Popup
    And I wait
    And I add Permission "Settings"
    And I click on Save button in Role Editor
    And I wait
      Then I should see "Role Update Successful" displayed for popup
    And I wait
    And I click X on Message Popup
    And I wait

  @TestCases_A-5
  Scenario: "@TestCases_A-5" (BB-247) Entering credential will not go straight to "Home" page.
      And I wait
      And I verify that I am in "qa-autobahn.blackbookcloud.com/dashboard" URL
      And I wait

  @TestCases_A-6
  Scenario: "@TestCases_A-6" (BB-360) Active Status is editable by user.
      And I reload page "http://qa-autobahn.blackbookcloud.com/login"
      And I wait
      And I enter my user email address user1@example.com
      And I enter my Password Password1
      And I click Login Button
      And I wait
      And I click Profile Button
      And I click My Profile sub menu
      And I click Edit Button
      And I wait
      And I click User Active checkbox
      And I wait
      Then Verify status on User Active checkbox

  @TestCases_A-7
  Scenario: "@TestCases_A-7" (BB-381) Click "Refresh" on "User List" will show blue background.
      And I wait
      And I verify that I am in "qa-autobahn.blackbookcloud.com/dashboard" URL
      And I wait
      And I click on Admin Tab
      And I click on Home Tab


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



