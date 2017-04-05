###################################
#   LOG IN Test cases            #
###################################

Feature: Enter data on "LOGIN" page

  Rules:
  -Verify that All inputs boxes are working and login correctly "No ERROR". (TC_Login_A)

  Question:
  -What happens if email entered is empty "Display ERROR"? Yes [TC_Login_B-1]
  -What happens if data entered on  email is bad "Display ERROR"? Yes [TC_Login_B-2]
  -What happens if data entered on  email is good and password is bad "Display ERROR"? Yes [TC_Login_B-3]
  -What happens if data user and password entered too many times "6 time" wrong "Display ERROR"? Yes [TC_Login_B-4]
  -What happens if password entered is empty "Display ERROR"? Yes [TC_Login_C]
  -What happens if User is Desactivated "Display ERROR"? YES [TC_Login_D]
  -What happens on successful log in (home page)? for now (TC_Login_A)
  -What happens if Password is Expired?

  -BUG: not loading the page correctly , I am adding reload page.
  
  Background:
  Given I enter BlackBook Login Website
  #And I wait

#######################################################################################################################
#                                             TC_Login_A                                                              #
#######################################################################################################################

  @TC_Login_A
  Scenario Outline: "@TC_Login_A" Enter good data for Login Page (NO ERRORS) display
     #ADDED THIS TO CONTINUE TEST CASES
    And I reload LogIn Page
   # And I wait
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button
    Then I should not see in "currentEmailAddress" errors displayed
    #And I wait
    And I click Avatar Image Button
    And I click My Profile sub menu from Avatar
    #And I wait
    And I click Edit Button in Edit User Profile
    And I click Reset Button in Edit User Profile
    And I click Cancel Button in Edit User Profile
    #And I wait
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar
    #And I wait

    Examples:
           | currentEmailAddress             |   currentPassword  |
#With Role attached
           | admintestemail1@yopmail.com     |   QaAdmin123       |
           | user1@example.com               |   Password1        |
           | user3@example.com               |   Password1        |
#With No Role attached
           | user2@example.com               |   Password1        |

########################################################################################################################
#                                               TC_Login_B                                                             #
########################################################################################################################

  @TC_Login_B-1
  Scenario Outline: "@TC_Login_B-1" Enter nothing on email/User for Login Page will throw error "Email Is Required"
       #ADDED THIS TO CONTINUE TEST CASES
    And I reload LogIn Page
    #And I wait
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button
      Then I should see "currentEmailAddress" message "Email Is Required" displayed for this "empty" field
    #And I wait

    Examples:
           | currentEmailAddress             |   currentPassword  |
#invalid log in Users
           |                                 |        Password1   |


   @TC_Login_B-2
   Scenario Outline: "@TC_Login_B-2" Enter bad data on email for Login Page will throw error "Invalid log in. Please contact your administrator."
       #ADDED THIS TO CONTINUE TEST CASES
     And I reload LogIn Page
     #And I wait
     And I enter my user email address <currentEmailAddress> in Login
     And I enter my Password <currentPassword> in Login
     And I click Login Button
      Then I should see "currentEmailAddress" message "Invalid log in. Please contact your administrator." displayed for this "filled" field
     #And I wait

    Examples:
           | currentEmailAddress             |   currentPassword  |
#invalid log in Users
           |         """                     |        Password1   |
           | emailAddress                    |        Password1   |
           | AemailAddress.@email.com        |        Password1   |
           | AemailAddress@@email.com        |        Password1   |
           | A                               |        Password1   |
           | A@.c                            |        Password1   |
           | A@.                             |        Password1   |


  @TC_Login_B-3
  Scenario Outline: "@TC_Login_B-3" Enter bad data on password for Login Page will throw error ("Invalid Login. Please try again." first time entering bad password)
       #ADDED THIS TO CONTINUE TEST CASES
    And I reload LogIn Page
     #And I wait
     And I enter my user email address <currentEmailAddress> in Login
     And I enter my Password <currentPassword> in Login
     And I click Login Button
      Then I should see "currentEmailAddress" message "Invalid Login. Please try again." displayed for this "filled" field
    #And I wait

    Examples:
           | currentEmailAddress                |   currentPassword  |
#invalid log in Users
           |  admintestemail2@yopmail.com       |        Password0   |

    #(BUG NOT FIX)
#      @TC_Login_B-4
#      Scenario Outline: "@TC_Login_B-4" Enter invalid login 6 times for Login Page will throw error "Invalid login. Please reset your password."
#           #BUG ADDED THIS TO CONTINUE
#        And I reload page "https://qa-autobahn.blackbookcloud.com/login"
#        And I wait
#        And I enter my user email address <currentEmailAddress> in Login
#        And I enter my Password <currentPassword> in Login
#        And I click Login Button
#        #ADDED 2 task
#        And I re-enter the same user name and password
#        And I re-enter the same user name and password
#        #And I re-enter the same user name and password
#          Then I should see "currentEmailAddress" message "Invalid login. Please reset your password." displayed for this "filled" field
#        And I wait
#
#        Examples:
#          | currentEmailAddress                |   currentPassword  |
#          | admintestemail3@yopmail.com        |        Password0   |



#########################################################################################################################
#                                               TC_Login_C                                                              #
#########################################################################################################################

  @TC_Login_C
  Scenario Outline: "@TC_Login_C" Enter nothing on Password for Login Page will throw error "Password Is Required"
       #ADDED THIS TO CONTINUE TEST CASES
    And I reload LogIn Page
    #And I wait
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button
      Then I should see "currentPassword" message "Password Is Required" displayed for this "empty" field
    #And I wait

    Examples:
           | currentEmailAddress             |   currentPassword  |
#invalid Password
           | admintestemail4@yopmail.com     |                    |


#########################################################################################################################
#                                               TC_Login_D                                                              #
#########################################################################################################################
    @TC_Login_D
  Scenario Outline: "@TC_Login_D" Enter a Deactivated account for Login Page will throw error "Unable to log in. Please contact your administrator." (Require  @TestCases_A-1 Userlist).
        #ADDED THIS TO CONTINUE TEST CASES
      And I reload LogIn Page
    #And I wait
    And I enter my user email address <currentEmailAddress> in Login
    And I enter my Password <currentPassword> in Login
    And I click Login Button
      Then I should see "currentEmailAddress" message "Unable to log in. Please contact your administrator." displayed for this "filled" field
    #And I wait

    Examples:
           | currentEmailAddress             |   currentPassword  |
#invalid log in Users
           |  admintestemail5@yopmail.com    |       QaAdmin123   |

#########################################################################################################################
#                                               TC_Login_E                                                              #
#########################################################################################################################
  @TC_Login_E
  Scenario Outline: "@TC_Login_E" Activate a Deactivated account.Then, Login with Account. (NO ERROR)
        #ADDED THIS TO CONTINUE TEST CASES
      And I reload LogIn Page
      #And I wait
      And I enter my user email address user1@example.com in Login
      And I enter my Password Password1 in Login
      And I click Login Button
      #And I wait
      And I click on Admin Tab
      And I click on Users submenu from Admin Tab
      #And I wait
      And I enter Filter User List <currentEmailAddress> in User List
      And I click Status Filter
      And I click Inactive in submenu from Status FilterValue
      #And I wait
      And I click on Gear Icon 1 "admintestemail5@yopmail.com in User List"
      And I click Activate in submenu from Gear Icon
      #And I wait
      And I click Avatar Image Button
      And I click Logout sub menu from Avatar
      #And I wait
      And I reload page "https://qa-autobahn.blackbookcloud.com/login"
      #And I wait
      And I enter my user email address <currentEmailAddress> in Login
      And I enter my Password <currentPassword> in Login
      And I click Login Button
      #And I wait
      And I click Avatar Image Button
      And I click Logout sub menu from Avatar
      #And I wait

    Examples:
           | currentEmailAddress             |   currentPassword  |
#invalid log in Users
           |  admintestemail5@yopmail.com    |       QaAdmin123   |