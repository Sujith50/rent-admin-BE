import { gql } from "graphql-tag";

export const typeDefs = gql`
  input OnSignUpCodeInput {
    email: String!
  }
  input OnForgotcode {
    email: String!
  }
  input forgotpss {
    email: String!
    password: String!
    otp: String!
  }
  input onVetfyOtp {
    email: String!
    otp: String!
  }
  input OnCreateAccount {
    password: String!
    email: String!
    otp: String!
  }
  input OnLogin {
    email: String
    password: String
  }

  input buildingdetail {
    type: String!
    houseno: String!
    phonenumber: String!
    name: String!
    advancepayment: String!
    livingstart: String!
    rentpermonth: String!
    tenantuuid: String!
  }
  input rentUpdate {
    payamount: String!
    date: String!
    houseuuid: String!
  }
  input isApprove {
    uuid: String!
    houseuuid: String!
  }
  input Deletetenant {
    uuid: String!
  }
  # second model
  input NoofRooms {
    name: String
    count: String
  }
  input nameandnoofrooms {
    buildingname: String
    data: [NoofRooms]
  }
  input Addrooms {
    name: String
    newcount: String
  }
  input AddTenant {
    name: String
    phonenumber: String
    email: String
    roomuuid: String
    status: String
    startingdate: String
    advancepayment: String
    rentpermonth: String
    type: String
    doornumber: String
  }
  input riseissues {
    tenantuuid: String!
    roomuuid: String!
    question: String!
  }
  input replyissues {
    questionuuid: String!
    answer: String!
  }
  input Changingpass {
    pathurl: String
    password: String
  }
  input Onpayment {
    roomuuid: String
    codeword: String
  }
  # admin login
  input OnAdminLogin {
    email: String
    password: String
  }
  type roomdetail {
    name: String
    uuid: String
    tenantuuid: String
  }
  type Totalroomdetail {
    name: String
    detail: [roomdetail]
  }
  #
  type User {
    useremail: String
    role: String
    uuid: String
    name: String
    phonenumber: String
  }
  type rentpayments {
    payamount: String
    date: String
  }
  type RentDetail {
    tenantuuid: String
    paymentdetail: [rentpayments]
    roomuuid: String
  }
  type roomDetails {
    name: String
    phonenumber: String
    email: String
    startingdate: String
    advancepayment: String
    rentpermonth: String
    type: String
    password: String
    doornumber: String
  }
  type Tenants {
    housetype: String
    housenumber: String
    tenantphonenumber: String
    tenantname: String
    advancepayment: String
    rentpermonth: String
    startingdate: String
    houseuuid: String
    tenantuuid: String
  }
  type Notify {
    useremail: String
    uuid: String
    role: String
    isverified: Boolean
  }
  type Tenantpersonal {
    type: String
    name: String
    startingdate: String
    roomuuid: String
    rentpermonth: String
    phonenumber: String
    email: String
    advancepayment: String
  }
  type PersonaldataChangepass {
    name: String
    roomuuid: String
    phonenumber: String
  }
  type Gettenant {
    name: String
    phonenumber: String
    email: String
    roomuuid: String
    status: String
    startingdate: String
    advancepayment: String
    rentpermonth: String
    type: String
    doornumber: String
  }
  type reply {
    who: String
    ans: String
    date: Float
  }

  type Question {
    question: String
    uuid: String
    date: Float
    status: Boolean
    answer: [reply]
  }
  type getfullIssue {
    roomuuid: String
    issues: [Question]
  }
  type Query {
    hello: String
    tenants: [Tenants]
    notify: [Notify]
    #
    totalrooms: [Totalroomdetail]
    tenantpersonal(uuid: String): Tenantpersonal
    chnagepasswordq(password: String): PersonaldataChangepass
    gettenantdetail: [Gettenant]
    payments: [RentDetail]
    tenentpayment(uuid: String): RentDetail
    users: User
    getIssues: [getfullIssue]
    roomDetails(roomuuid: String): roomDetails
  }
  type Mutation {
    onSignupCode(input: OnSignUpCodeInput): String
    onVarify(input: onVetfyOtp): String
    onCreateacc(input: OnCreateAccount): String
    onLogin(input: OnLogin): String
    buildingDetails(input: buildingdetail): String
    onForgotCode(input: OnForgotcode): String
    onForgotPass(input: forgotpss): String
    isapprove(input: isApprove): String
    deleteTenant(input: Deletetenant): String
    #
    noofRooms(input: nameandnoofrooms): String
    addnewcount(input: Addrooms): String
    addtentant(input: AddTenant): String
    changepass(input: Changingpass): String
    onPayrent(input: rentUpdate): String
    Riseissues(input: riseissues): String
    replyIssues(input: replyissues): String
    paymenttransaction(input: Onpayment): String
    onAdminLogin(input: OnAdminLogin): String
  }
`;
