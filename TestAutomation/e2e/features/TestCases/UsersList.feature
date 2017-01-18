###################################
# ADD USER PROFILE Test cases    #
###################################

Feature:  "User List"

  Rules: Verify "User List" opens

  Question:
  -Verify that All inputs boxes are working No ERROR. (Test case A)
  -What happens if email entered is bad (display ERROR)? Yes (Test case B-1)
  -What happens if phone number entered is bad (display ERROR)? Yes (Test case B-2)

  -What happens if fields are empty on require fields (display ERROR)? Yes (Test case C)
  -BUGS WHITE SPACES for first name ,last name , email, and password?

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

#  @TestCases_A-5
#  Scenario: "@TestCases_A-5" Verify current User can see current profile after seen other user's profile.(same component call "Caching issues")
#    And I click on Admin Tab
#    And I click on Users submenu from Admin Tab
#    And I enter filter value admintestemail1@yopmail.com
#    And I click on Gear Icon
#    And I click View from Gear Icon
#    And I click Edit Button
#      Then I should see user's "emailAddress" displayed in screen with value "admintestemail1@yopmail.com"
#    And I wait

  @TestCases_A-1
  Scenario: " @TestCases_A-1" Deactivate User
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I enter filter value admintestemail5@yopmail.com
    And I click on Gear Icon
    And I click Deactivate in submenu from Gear Icon

  @TestCases_A-2
  Scenario: "@TestCases_A-2" admintestemail6@yopmail.com Deactivate User
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I enter filter value admintestemail6@yopmail.com
    And I click on Gear Icon
    And I click Deactivate in submenu from Gear Icon

  @TestCases_A-3
  Scenario: "@TestCases_A-3" admintestemail6@yopmail.com Activate User
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I click Status Filter
    And I enter filter value admintestemail6@yopmail.com
    And I click Inactive in submenu from Status Filter
    And I click on Gear Icon
    And I click Activate in submenu from Gear Icon

#######################################################################################################################
#                                             Test cases A                                                            #
#######################################################################################################################

