###################################
#   LOG IN Test cases            #
###################################

Feature: Enter data on "LOGIN" page

  Rules:
  -Verify that All inputs boxes are working and login correctly. (TC_Login_A)

  Question:
  -What happens if email entered is empty (display ERROR)? Yes (TC_Login_B-1)
  -What happens if password entered is empty (display ERROR)? Yes (TC_Login_C)
  -BUG: not all created account are login.
  
#  Background:
#    Given I enter BlackBook Website

#######################################################################################################################
#                                             TC_Login_A                                                              #
#######################################################################################################################

#  @TC_Login_A
#  Scenario Outline: Enter good data for Login Page
#    Given I enter BlackBook Login Website
#    And I enter my user email address <currentEmailAddress>
#    And I enter my Password <currentPassword>
#    And I click Login Button
#    Then I should not see in "currentEmailAddress" errors displayed
#    And I click Profile Button
#    And I click My Profile sub menu
#    And I click Edit Button
#    And I click Reset Button
#    And I click Cancel Button
#    And I click Profile Button
#    And I click Logout sub menu
#
#    Examples:
#           | currentEmailAddress             |   currentPassword  |
##valid log in Users
#           | user1@example.com               |   Password1        |
#           | user2@example.com               |   Password1        |
#           | user3@example.com               |   Password1        |
#           | admintestemail1@yopmail.com     |   Password1        |


#########################################################################################################################
#                                               TC_Login_B                                                              #
#########################################################################################################################

  @TC_Login_B-1
  Scenario Outline: Enter nothing on email/user for Login Page will throw error
    Given I enter BlackBook Login Website
    And I enter my user email address <currentEmailAddress>
    And I enter my Password <currentPassword>
    And I click Login Button
    Then I should see "currentEmailAddress" errors "Email Is Required" displayed for this "empty" field

    Examples:
           | currentEmailAddress             |   currentPassword  |
#invalid log in Users
           |                                 |        Password1   |


#########################################################################################################################
#                                               NOT SURE  BEHAVIOUR                                                     #
#########################################################################################################################
#   @TC_Login_B-2
#  Scenario Outline: Enter bad data on email for Login Page will throw error?
#     Given I enter BlackBook Login Website
#    And I enter my user email address <currentEmailAddress>
#    And I enter my Password <currentPassword>
#    And I click Login Button
#    Then I should see "currentEmailAddress" errors "Email Is Required" displayed for this "filled" field
#
#    Examples:
#           | currentEmailAddress             |   currentPassword  |
##invalid log in Users
#           |         """                     |        Password1   |
#           | emailAddress                    |        Password1   |
#           | AemailAddress.@email.com        |        Password1   |
#           | AemailAddress@@email.com        |        Password1   |
#           | A                               |        Password1   |
#           | A@.c                            |        Password1   |
#           | A@.                             |        Password1   |


#########################################################################################################################
#                                               TC_Login_C                                                              #
#########################################################################################################################

  @TC_Login_C
  Scenario Outline: Enter bad data on email for Login Page
    Given I enter BlackBook Login Website
    And I enter my user email address <currentEmailAddress>
    And I enter my Password <currentPassword>
    And I click Login Button
      Then I should see "currentPassword" errors "Password Is Required" displayed for this "empty" field

    Examples:
           | currentEmailAddress             |   currentPassword  |
#invalid Password
           | user1@example.com               |                    |



