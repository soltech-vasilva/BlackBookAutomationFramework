###################################
# ADD Roles Test cases            #
###################################

Feature:  "Add a new Role"

  Rules: Add a new Role

  Question:
  -Verify 26 user can be created. [TestCases_1]
  -What happens if User enter already exit "Display ERROR"? Yes [TestCases_2]
  -Verify that All inputs boxes are working "No ERROR". [Test case A]
  -What happens if email entered is bad "Display ERROR"? Yes [Test case B-1]
  -What happens if phone number entered is bad "Display ERROR"? Yes [Test case B-2]
  -What Happens if Password does not meet requirements and Confirm Password is different "Display ERROR"?Yes ON BOTH  [Test case B-3]
  -What Happens if Password does not meet requirements and Password is same "Display ERROR"? Yes ON Password Only [Test case B-4]
  -What happens if fields are all empty on require fields "Display ERROR"? Yes [TestCases_C-1]
  -what happens if first name is empty on require fields "Display ERROR"? Yes [TestCases_C-2]
  -what happens if last name is empty on require fields "Display ERROR"? Yes [TestCases_C-3]
  -what happens if email address is empty on require fields "Display ERROR"? Yes [TestCases_C-4]
  -what happens if new Password is empty on require fields "Display ERROR"? Yes [TestCases_C-5]
  -what happens if Confirm new Password is empty on require fields "Display ERROR"? Yes [TestCases_C-6]
  -what happens if enter empty strings "white spaces" (SPACE BAR) "Display ERROR"? Yes [TestCases_C-7]

  -BUG: not loading the page correctly , I am adding reload page.

  Background:

    Given I enter BlackBook Login Website
     #ADDED THIS TO CONTINUE TEST CASES
    And I reload "LogIn" page
    And I enter my user email address user1@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I click on Admin Tab
    And I click on Roles submenu from Admin Tab

#####################################################################################################################
#                                             Test cases 1                                                          #
#####################################################################################################################


  @TestCases_1
  Scenario: "TestCases_1" Create a role with same existing Role Name. "Error" Display "Role was not added, please try again."
    And I click on New Role Button in Role List
    And I enter Role Name ""
    Then I should see "RoleName" message "Required" displayed for this "empty" field in Role Editor
    Then I should see "RoleMarket" message "Required" displayed for this "empty" field in Role Editor
    And I select Role Market "US Used Car" in Role Editor
      Then I should see in "Save" button "disable" in Edit Role
      Then I should see Role Market value "US Used Car"
      Then I should not see in "RoleMarket" errors displayed in Edit Role
    And I enter Role Name "Basic Role-No Permissions"
      Then I should not see in "RoleName" errors displayed in Edit Role
      Then I should see in "Save" button "enable" in Edit Role
    And I click Filter By Group dropdown "User" Permissions in Role Editor
    And I enter "Can View User List" on Filter Permissions in Role Editor
    And I click checkbox  "1" "Can view User List" Permission row in Role Editor
    And I clear text box selected "FilterPermissions" in Role Editor
    And I enter "admintestemail10@yopmail.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
      Then I should see "Role was not added, please try again." displayed on "EditRoles" popup
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar

  @TestCases_2
  Scenario: "TestCases_2" Create a new role Using Filters "Admin View All Only". "No Error" Display
    And I click on New Role Button in Role List
    And I enter Role Name ""
      Then I should see "RoleName" message "Required" displayed for this "empty" field in Role Editor
      Then I should see "RoleMarket" message "Required" displayed for this "empty" field in Role Editor
    And I select Role Market "US Used Car" in Role Editor
      Then I should see in "Save" button "disable" in Edit Role
      Then I should see Role Market value "US Used Car"
      Then I should not see in "RoleMarket" errors displayed in Edit Role
    And I enter Role Name "T_Admin View All Only"
      Then I should not see in "RoleName" errors displayed in Edit Role
      Then I should see in "Save" button "enable" in Edit Role
    And I click Filter By Group dropdown "User" Permissions in Role Editor
      Then I should see "User" display for Filter By Group in Role Editor
    And I click Circle icon in permissions grid to "expand" in Role Editor
    #fix below delete
    And I click checkbox  "0" "Users" Permission row in Role Editor
    And I click checkbox  "6" "Can view User List" Permission row in Role Editor
    And I click checkbox  "4" "Can view Other Users" Permission row in Role Editor
    #fix below delete
    And I click checkbox  "0" "Users" Permission row in Role Editor
    And I click Filter By Group dropdown "Roles" Permissions in Role Editor
      Then I should see "Roles" display for Filter By Group in Role Editor
    And I click Circle icon in permissions grid to "expand" in Role Editor
     #fix below delete
    And I click checkbox  "0" "Roles" Permission row in Role Editor
    And I click checkbox  "2" "Can view Role List" Permission row in Role Editor
     #fix below delete
    And I click checkbox  "0" "Roles" Permission row in Role Editor
    And I click Filter By Group dropdown "Settings" Permissions in Role Editor
      Then I should see "Settings" display for Filter By Group in Role Editor
    And I click Circle icon in permissions grid to "expand" in Role Editor
    And I click checkbox  "0" "Settings" Permission row in Role Editor
    And I click Filter By Status dropdown "Active" in Role Editor
      Then I should see "Active" display for Filter By Status in Role Editor
    And I enter "admintestemail11@yopmail.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
      Then I should see "Role has been successfully added" displayed on "EditRoles" popup
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar

  @TestCases_3
  Scenario: "TestCases_3" Create a new role Using Filters "Edit Other Users Basic". "No Error" Display
    And I click on New Role Button in Role List
    And I enter Role Name ""
      Then I should see "RoleName" message "Required" displayed for this "empty" field in Role Editor
      Then I should see "RoleMarket" message "Required" displayed for this "empty" field in Role Editor
    And I select Role Market "US Used Car" in Role Editor
      Then I should see in "Save" button "disable" in Edit Role
      Then I should see Role Market value "US Used Car"
      Then I should not see in "RoleMarket" errors displayed in Edit Role
    And I enter Role Name "U_Edit Other Users Basic"
      Then I should not see in "RoleName" errors displayed in Edit Role
      Then I should see in "Save" button "enable" in Edit Role
    And I click Filter By Group dropdown "User" Permissions in Role Editor
      Then I should see "User" display for Filter By Group in Role Editor
    And I click Circle icon in permissions grid to "expand" in Role Editor
    And I click checkbox  "0" "Can Add/Edit Users" Permission row in Role Editor
    And I click checkbox  "6" "Can view User List" Permission row in Role Editor
    And I click checkbox  "4" "Can view Other Users" Permission row in Role Editor
    And I click Filter By Group dropdown "Roles" Permissions in Role Editor
      Then I should see "Roles" display for Filter By Group in Role Editor
    And I click Circle icon in permissions grid to "expand" in Role Editor
    #fix below delete
    And I click checkbox  "0" "Roles" Permission row in Role Editor
    And I click checkbox  "2" "Can view Role List" Permission row in Role Editor
     #fix below delete
    And I click checkbox  "0" "Roles" Permission row in Role Editor
    #And I click Filter By Group dropdown "Settings" Permissions in Role Editor
    And I click Filter By Status dropdown "Active" in Role Editor
      Then I should see "Active" display for Filter By Status in Role Editor
    And I enter "admintestemail12@yopmail.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
      Then I should see "Role has been successfully added" displayed on "EditRoles" popup
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar

  @TestCases_4
  Scenario: "TestCases_4" Create a new role Using Filters "Edit Other Users Basic + Password". "No Error" Display
    And I click on New Role Button in Role List
    And I enter Role Name ""
      Then I should see "RoleName" message "Required" displayed for this "empty" field in Role Editor
      Then I should see "RoleMarket" message "Required" displayed for this "empty" field in Role Editor
    And I select Role Market "US Used Car" in Role Editor
      Then I should see in "Save" button "disable" in Edit Role
      Then I should see Role Market value "US Used Car"
      Then I should not see in "RoleMarket" errors displayed in Edit Role
    And I enter Role Name "V_Edit Other Users Basic + Password"
    Then I should not see in "RoleName" errors displayed in Edit Role
      Then I should see in "Save" button "enable" in Edit Role
    And I click Filter By Group dropdown "User" Permissions in Role Editor
      Then I should see "User" display for Filter By Group in Role Editor
    And I click Circle icon in permissions grid to "expand" in Role Editor
    And I click checkbox  "0" "Can Add/Edit Users" Permission row in Role Editor
    And I click checkbox  "6" "Can View User List" Permission row in Role Editor
    And I click checkbox  "4" "Can View Other Users" Permission row in Role Editor
    And I click checkbox  "3" "Can Reset Users Passwords" Permission row in Role Editor
    And I click Filter By Group dropdown "Roles" Permissions in Role Editor
      Then I should see "Roles" display for Filter By Group in Role Editor
    And I click Circle icon in permissions grid to "expand" in Role Editor
    #fix below delete
    And I click checkbox  "0" "Roles" Permission row in Role Editor
    And I click checkbox  "2" "Can view Role List" Permission row in Role Editor
     #fix below delete
    And I click checkbox  "0" "Roles" Permission row in Role Editor
    #And I click Filter By Group dropdown "Settings" Permissions in Role Editor
    And I click Filter By Status dropdown "Active" in Role Editor
      Then I should see "Active" display for Filter By Status in Role Editor
    And I enter "admintestemail13@yopmail.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
      Then I should see "Role has been successfully added" displayed on "EditRoles" popup
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar

  @TestCases_5
  Scenario: "TestCases_5" Create a new role Using Filters "Edit Other Users Basic + Roles". "No Error" Display
    #(BB-666)
    And I click on New Role Button in Role List
    And I enter Role Name ""
      Then I should see "RoleName" message "Required" displayed for this "empty" field in Role Editor
      Then I should see "RoleMarket" message "Required" displayed for this "empty" field in Role Editor
    And I select Role Market "US Used Car" in Role Editor
      Then I should see in "Save" button "disable" in Edit Role
      Then I should see Role Market value "US Used Car"
      Then I should not see in "RoleMarket" errors displayed in Edit Role
    And I enter Role Name "W_Edit Other Users Basic + Roles"
      Then I should not see in "RoleName" errors displayed in Edit Role
      Then I should see in "Save" button "enable" in Edit Role
    And I click Filter By Group dropdown "User" Permissions in Role Editor
      Then I should see "User" display for Filter By Group in Role Editor
    And I click Circle icon in permissions grid to "expand" in Role Editor
    And I click checkbox  "0" "Can Add/Edit Users" Permission row in Role Editor
    And I click checkbox  "6" "Can View User List" Permission row in Role Editor
    And I click checkbox  "4" "Can View Other Users" Permission row in Role Editor
    And I click Filter By Group dropdown "Roles" Permissions in Role Editor
      Then I should see "Roles" display for Filter By Group in Role Editor
    And I click Circle icon in permissions grid to "expand" in Role Editor
    And I click checkbox  "0" "Can Add/Edit Roles" Permission row in Role Editor
    And I click checkbox  "2" "Can view Role List" Permission row in Role Editor
    #And I click Filter By Group dropdown "Settings" Permissions in Role Editor
    And I click Filter By Status dropdown "Active" in Role Editor
      Then I should see "Active" display for Filter By Status in Role Editor
    And I enter "admintestemail14@yopmail.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
      Then I should see "Role has been successfully added" displayed on "EditRoles" popup
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar

  @TestCases_6
  Scenario: "TestCases_6" Create a new role Using Filters "Edit Other Users Basic + Roles + Password". "No Error" Display
    #(BB-668)
    And I click on New Role Button in Role List
    And I enter Role Name ""
      Then I should see "RoleName" message "Required" displayed for this "empty" field in Role Editor
      Then I should see "RoleMarket" message "Required" displayed for this "empty" field in Role Editor
    And I select Role Market "US Used Car" in Role Editor
      Then I should see in "Save" button "disable" in Edit Role
      Then I should see Role Market value "US Used Car"
      Then I should not see in "RoleMarket" errors displayed in Edit Role
    And I enter Role Name "X_Edit Other Users Basic + Roles + Password"
      Then I should not see in "RoleName" errors displayed in Edit Role
      Then I should see in "Save" button "enable" in Edit Role
    And I click Filter By Group dropdown "User" Permissions in Role Editor
      Then I should see "User" display for Filter By Group in Role Editor
    And I click Circle icon in permissions grid to "expand" in Role Editor
    And I click checkbox  "0" "Can Add/Edit Users" Permission row in Role Editor
    And I click checkbox  "6" "Can View User List" Permission row in Role Editor
    And I click checkbox  "3" "Can Reset Users Passwords" Permission row in Role Editor
    And I click checkbox  "4" "Can View Other Users" Permission row in Role Editor
    And I click Filter By Group dropdown "Roles" Permissions in Role Editor
      Then I should see "Roles" display for Filter By Group in Role Editor
    And I click Circle icon in permissions grid to "expand" in Role Editor
    And I click checkbox  "0" "Can Add/Edit Roles" Permission row in Role Editor
    And I click checkbox  "2" "Can view Role List" Permission row in Role Editor
    #And I click Filter By Group dropdown "Settings" Permissions in Role Editor
    And I click Filter By Status dropdown "Active" in Role Editor
      Then I should see "Active" display for Filter By Status in Role Editor
    And I enter "admintestemail15@yopmail.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I click on Save button in Role Editor
      Then I should see "Role has been successfully added" displayed on "EditRoles" popup
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar

  @TestCases_7
  Scenario: "TestCases_7" Edit Roles- Remove users from "Administrators" Role admintestemail11@yopmail.com-admintestemail15@yopmail.com
    And I click on Gear Icon 1 "Administrator in Role List"
    And I click Edit from Gear Icon "in Role List"
    And I enter "admintestemail11@yopmail.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I clear text box selected "FilterUsers" in Role Editor
    And I enter "admintestemail12@yopmail.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I clear text box selected "FilterUsers" in Role Editor
    And I enter "admintestemail13@yopmail.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I clear text box selected "FilterUsers" in Role Editor
    And I enter "admintestemail14@yopmail.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I clear text box selected "FilterUsers" in Role Editor
    And I enter "admintestemail15@yopmail.com" on Filter Users in Role Editor
    And I click checkbox on first user found from Filter Users in Role Editor
    And I clear text box selected "FilterUsers" in Role Editor
    And I click on Save button in Role Editor
      Then I should see "Role successfully updated" displayed on "EditRoles" popup
    And I click Edit Button in Edit Roles
    And I click Cancel Button from Edit Roles
    And I click Avatar Image Button
    And I click Logout sub menu from Avatar


#  @TestCases_3
#  Scenario: "TestCases_3" Edit a Role. Button "Delete" needs to show up.
#    And I click on Gear Icon 2
#    And I click Edit from Gear Icon
#    And I wait
#
#
#    And I enter Role Name "BasicAccount"
#    Then I should see in "Save" button "disable" in Edit Role
#    And I select Role Market "US Used Car" in Role Editor
#    And I wait
#    Then I should see Role Market value "US Used Car"
#    Then I should see in "Save" button "enable" in Edit Role
#    And I enter "Can View User List" on Filter Permissions in Role Editor
#    And I click checkbox  "1" "Can view User List" Permission row in Role Editor
#    And I clear text box selected "FilterPermissions" in Role Editor
#    Then I should see in "Delete" button "enable" in Edit Role
#    And I wait
#    And I enter "User2" on Filter Users in Role Editor
#    And I click checkbox on first user found from Filter Users in Role Editor
#    And I wait
#    Then I should see in "Delete" button "disable" in Edit Role
#    And I click on Save button in Role Editor
#    Then I should see "Role has been successfully added" displayed on "EditRoles" popup
#    And I wait
#
#
#    And I enter Role Name "  "
#     Then I should see "RoleName" message "This is not a valid role title" displayed for this "filled" field in Role Editor