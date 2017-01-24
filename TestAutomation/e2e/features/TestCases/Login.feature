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
   Scenario Outline: "@TC_Login_B-2" Enter bad data on email for Login Page will throw error "Invalid log in. Please contact your administrator."
     Given I enter BlackBook Login Website
        #BUG ADDED THIS TO CONTINUE
     And I reload page "http://qa-autobahn.blackbookcloud.com/login"
     And I wait
     And I enter my user email address <currentEmailAddress>
     And I enter my Password <currentPassword>
     And I click Login Button
      Then I should see "currentEmailAddress" errors "Invalid log in. Please contact your administrator." displayed for this "filled" field

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
     Given I enter BlackBook Login Website
       #BUG ADDED THIS TO CONTINUE
     And I reload page "http://qa-autobahn.blackbookcloud.com/login"
     And I wait
     And I enter my user email address <currentEmailAddress>
     And I enter my Password <currentPassword>
     And I click Login Button
      Then I should see "currentEmailAddress" errors "Invalid Login. Please try again." displayed for this "filled" field

    Examples:
           | currentEmailAddress                |   currentPassword  |
#invalid log in Users
           |  admintestemail2@yopmail.com       |        Password0   |

      @TC_Login_B-4
      Scenario Outline: "@TC_Login_B-4" Enter invalid login 6 times for Login Page will throw error "Invalid login. Please reset your password."
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
          Then I should see "currentEmailAddress" errors "Invalid login. Please reset your password." displayed for this "filled" field

        Examples:
          | currentEmailAddress                |   currentPassword  |
          | admintestemail3@yopmail.com        |        Password0   |



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
           | admintestemail4@yopmail.com     |                    |


#########################################################################################################################
#                                               TC_Login_D                                                              #
#########################################################################################################################
    @TC_Login_D
  Scenario Outline: "@TC_Login_D" Enter a Deactivated account for Login Page will throw error "Unable to log in. Please contact your administrator."
    Given I enter BlackBook Login Website
       #BUG ADDED THIS TO CONTINUE
    And I reload page "http://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address <currentEmailAddress>
    And I enter my Password <currentPassword>
    And I click Login Button
      Then I should see "currentEmailAddress" errors "Unable to log in. Please contact your administrator." displayed for this "filled" field

    Examples:
           | currentEmailAddress             |   currentPassword  |
#invalid log in Users
           |  admintestemail5@yopmail.com    |       QaAdmin123   |

#########################################################################################################################
#                                               TC_Login_E                                                              #
#########################################################################################################################
  @TC_Login_E
  Scenario Outline: "@TC_Login_E" Activate a Deactivated account.Then, Login with Account. (NO ERROR)

    Given I enter BlackBook Login Website
       #BUG ADDED THIS TO CONTINUE
       ## bug that bypasses login happens only in desktop catches issues (it thinks is login) , browserstack works fine
      And I reload page "http://qa-autobahn.blackbookcloud.com/login"
      And I wait
      And I enter my user email address user3@example.com
      And I enter my Password Password1
      And I click Login Button
      And I click on Admin Tab
      And I click on Users submenu from Admin Tab
      And I enter filter value <currentEmailAddress>
      And I click Status Filter
      And I click Inactive in submenu from Status Filter
      And I click on Gear Icon 0
      And I click Activate in submenu from Gear Icon
      And I click Profile Button
      And I click Logout sub menu
      And I reload page "http://qa-autobahn.blackbookcloud.com/login"
      And I wait
      And I enter my user email address <currentEmailAddress>
      And I enter my Password <currentPassword>
      And I click Login Button
      And I click Profile Button
      And I click Logout sub menu

    Examples:
           | currentEmailAddress             |   currentPassword  |
#invalid log in Users
           |  admintestemail5@yopmail.com    |       QaAdmin123   |