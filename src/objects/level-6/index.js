const _ = require('lodash');

const meta = {
  title: "Comparing Objects by Value",
  codeFiles: ["constObjPropsMutable.js"]
};

let beforeString = `const safeImmutableObject = { clientID: {username: "", password: "" }, sessionID: 0340927856798933;
let unsafeMutableCopy = safeImmutableObject;

function buggyWebsite(safeImmutableObject, unsafeMutableCopy) {
  const sessionID = safeImmutableObject.sessionID;
  let userInputUserName, userInputPassword;

  userInputUserName = "l33tHaX0R@420.jm";
  userInputPassword = "*********";

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // you can only assign values to the binding below! Nothing else!
  `;

  let afterString = `  // you can only assign values to the binding above! Nothing else!
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    const extraSafeSafetyCheck = (unsafeMutableCopy == safeImmutableObject);

    if ( extraSafeSafetyCheck && safeImmutableObject.sessionID == sessionID ) {
      unsafeMutableCopy.clientID.username = userInputUsername;
      unsafeMutableCopy.clientID.password = userInputPassword;
      return unsafeMutableCopy;
    }
    else {
      return safeImmutableObject;
    }
  };

  const httpRequest = function(websocket){ return buggyWebsite() }();

  function websiteServer(request) {
    const adminSessionCache = '0000000000000001'
    if ( request.sessionID == adminSessionCache ) {
      return grantAdminAccess = true;
    }
    else {
      const dataBaseLookup = request.sessionID;
      const matchSession = function(databaseLookup){ return }();
      if ( matchSession == false ) {
        const checkCredentials = function(request.clientID.username, request.clientID.password, dataBaseLookup) { return }
      }
      return grantAdminAccess = checkCredentials;
    }

  };

  websiteServer(httpRequest)`;

beforeString = _.escapeRegExp(beforeString);
afterString = _.escapeRegExp(afterString);

const noCodeChanges = new RegEx(`(?<=^${beforeString})\s{0,4}unsafeMutableCopy\s{0,4}\=[^\n]*\n(?=${afterString}$)`,'u');

test(
  `websiteServer(httpRequest);`,
  () => websiteServer(httpRequest),
  (testValue, source) => {
    if ( !noCodeChanges.test(source) ) {
      return {
        error: "You changed code outside of the allowed area!"
      }
    }
    if (testValue == true) {
      return {
        success: "Access granted! Welcome, Admin."
      }
    }
    else {
      return {
        error: "Access denied!"
      }
    }
  }
);
