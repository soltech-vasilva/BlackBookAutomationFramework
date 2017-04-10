###################################
# USER LIST PAGE Test cases       #
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
      #ADDED THIS TO CONTINUE TEST CASES
    And I reload LogIn Page
    And I enter my user email address user1@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button

#######################################################################################################################
#                                             Test cases A                                                            #
#######################################################################################################################

  @TestCases_A-1
  Scenario: " @TestCases_A-1" Deactivate User
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I enter Filter User List admintestemail5@yopmail.com in User List
    And I click on Gear Icon 1 "admintestemail5@yopmail.com in User List"
    And I click Deactivate in submenu from Gear Icon
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar

  @TestCases_A-2
  Scenario: "@TestCases_A-2" admintestemail6@yopmail.com Deactivate User
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I enter Filter User List admintestemail6@yopmail.com in User List
    And I click on Gear Icon 1 "admintestemail6@yopmail.com in User List"
    And I click Deactivate in submenu from Gear Icon
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar

  @TestCases_A-3
  Scenario: "@TestCases_A-3" admintestemail6@yopmail.com Activate User
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I enter Filter User List admintestemail6@yopmail.com in User List
    And I click Filter By User List Status dropdown "Inactive" in User List
    And I click on Gear Icon 1 "admintestemail6@yopmail.com in User List"
    And I click Activate in submenu from Gear Icon
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar