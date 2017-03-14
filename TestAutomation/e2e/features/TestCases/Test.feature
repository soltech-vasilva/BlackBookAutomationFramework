###################################
#               BUG               #
###################################

Feature:  "Verify that this bugs dont return to the application."

  Rules: Verify "User List" opens

  Question:


  Background:
  Given I enter BlackBook Login Website
  And I wait

#######################################################################################################################
#                                             TC_Login_A                                                              #
#######################################################################################################################

  @TC_Login_A
  Scenario Outline: "@TC_Login_A" Enter good data for Login Page (NO ERRORS) display
     #BUG ADDED THIS TO CONTINUE
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button
    Then I should not see in "currentEmailAddress" errors displayed
    And I wait
    And I click Avatar Image Button
    And I click My Profile sub menu from Avatar
    And I wait
    And I click Edit Button in Edit User Profile
    And I click Reset Button in Edit User Profile
    And I click Cancel Button in Edit User Profile
    And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    And I wait


    Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | user1@example.com               |   Password1        |
           | user1@example.com               |   Password1        |
#           | user3@example.com               |   Password1        |
##With No Role attached
#           | user2@example.com               |   Password1        |