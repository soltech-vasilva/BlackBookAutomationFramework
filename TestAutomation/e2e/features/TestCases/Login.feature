###################################
#   LOG IN Test cases            #
###################################

Feature: Enter data on "LOGIN" page

  Rules:
  -Verify that All inputs boxes are working and login correctly. (TC_Login_A)

  Question:
  -What happens if email entered is empty (display ERROR)? Yes (TC_Login_B-1)
  -What happens if data entered on  email and Password? (display ERROR) Yes (TC_Login_B-2 to TC_Login_B-3)
  -What happens if data entered too many times "6 time"? (display ERROR) Yes (TC_Login_B-4)
  -What happens if password entered is empty (display ERROR)? Yes (TC_Login_C)
  -What happens if User is Desactivated (display ERROR)? YES (TC_Login_D)
  -What happens on successful log in (home page)? for now (TC_Login_A)
  -What happens if Password is Expired?

  -BUG: not loading the page correctly , I am adding reload page.
  
#  Background:
    #Given I enter BlackBook Website

#######################################################################################################################
#                                             TC_Login_A                                                              #
#######################################################################################################################

  @TC_Login_A
  Scenario Outline: "@TC_Login_A" Enter good data for Login Page (NO ERRORS) display
    Given I enter BlackBook Login Website
     #BUG ADDED THIS TO CONTINUE
    And I reload page "http://qa-autobahn.blackbookcloud.com/login"
    And  I wait
    And I enter my user email address <currentEmailAddress>
    And I enter my Password <currentPassword>
    And I click Login Button
    Then I should not see in "currentEmailAddress" errors displayed
    And I click Profile Button
    And I click My Profile sub menu
    And I click Edit Button
    And I click Reset Button
    And I click Cancel Button
    And I click Profile Button
    And I click Logout sub menu


    Examples:
           | currentEmailAddress             |   currentPassword  |
#valid log in Users  BUGS cant log in
           | admintestemail1@yopmail.com     |   QaAdmin123       |
           | user1@example.com               |   Password1        |
           | user2@example.com               |   Password1        |
           | user3@example.com               |   Password1        |

########################################################################################################################
#                                               TC_Login_B                                                              #
########################################################################################################################

  @TC_Login_B-1
  Scenario Outline: "@TC_Login_B-1" Enter nothing on email/User for Login Page will throw error "Email Is Required"
    Given I enter BlackBook Login Website
       #BUG ADDED THIS TO CONTINUE
    And I reload page "http://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address <currentEmailAddress>
    And I enter my Password <currentPassword>
    And I click Login Button
      Then I should see "currentEmailAddress" errors "Email Is Required" displayed for this "empty" field

    Examples:
           | currentEmailAddress             |   currentPassword  |
#invalid log in Users
           |                                 |        Password1   |


   @TC_Login_B-2
   Scenario Outline: "@TC_Login_B-2" Enter bad data on email for Login Page will throw error "Invalid login."
     Given I enter BlackBook Login Website
        #BUG ADDED THIS TO CONTINUE
     And I reload page "http://qa-autobahn.blackbookcloud.com/login"
     And I wait
     And I enter my user email address <currentEmailAddress>
     And I enter my Password <currentPassword>
     And I click Login Button
      Then I should see "currentEmailAddress" errors "Invalid login." displayed for this "filled" field

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
  Scenario Outline: "@TC_Login_B-3" Enter bad data on password for Login Page will throw error ("Invalid login."  LOCK ACCCOUNT)
     Given I enter BlackBook Login Website
       #BUG ADDED THIS TO CONTINUE
     And I reload page "http://qa-autobahn.blackbookcloud.com/login"
     And I wait
     And I enter my user email address <currentEmailAddress>
     And I enter my Password <currentPassword>
     And I click Login Button
      Then I should see "currentEmailAddress" errors "Invalid login." displayed for this "filled" field

    Examples:
           | currentEmailAddress                |   currentPassword  |
#invalid log in Users
           | admintestemail1@yopmail.com        |        Password0   |

      @TC_Login_B-4
      Scenario Outline: "@TC_Login_B-4" Enter invalid login 6 times for Login Page will throw error "Invalid Login , Please reset your password"
     Given I enter BlackBook Login Website
           #BUG ADDED THIS TO CONTINUE
        And I reload page "http://qa-autobahn.blackbookcloud.com/login"
        And I wait
        And I enter my user email address <currentEmailAddress>
        And I enter my Password <currentPassword>
        And I click Login Button
        #ADDED 2 task
        And I enter time the same user name and password
        And I enter time the same user name and password
        #BUG it should say "Reset your password" "[object ProgressEvent]"
          Then I should see "currentEmailAddress" errors "Invalid Login , Please reset your password" displayed for this "filled" field

        Examples:
          | currentEmailAddress                |   currentPassword  |
          | admintestemail1@yopmail.com        |        Password0   |



#########################################################################################################################
#                                               TC_Login_C                                                              #
#########################################################################################################################

  @TC_Login_C
  Scenario Outline: "@TC_Login_C" Enter nothing on Password for Login Page will throw error "Password Is Required"
    Given I enter BlackBook Login Website
       #BUG ADDED THIS TO CONTINUE
    And I reload page "http://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address <currentEmailAddress>
    And I enter my Password <currentPassword>
    And I click Login Button
      Then I should see "currentPassword" errors "Password Is Required" displayed for this "empty" field

    Examples:
           | currentEmailAddress             |   currentPassword  |
#invalid Password
           | admintestemail1@yopmail.com     |                    |


#########################################################################################################################
#                                               TC_Login_D                                                              #
#########################################################################################################################
    @TC_Login_D
  Scenario Outline: "@TC_Login_D" Enter a Deactivated account for Login Page will throw error "Invalid Login, Please contact your Administrator"
    Given I enter BlackBook Login Website
       #BUG ADDED THIS TO CONTINUE
    And I reload page "http://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address <currentEmailAddress>
    And I enter my Password <currentPassword>
    And I click Login Button
      Then I should see "currentEmailAddress" errors "Invalid Login, Please contact your Administrator" displayed for this "filled" field

    Examples:
           | currentEmailAddress             |   currentPassword  |
#invalid log in Users
           |  admintestemail1@yopmail.com    |       QaAdmin123   |