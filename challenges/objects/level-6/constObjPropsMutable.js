
const safeImmutableObject = { clientID: {username: "", password: "" }, sessionID: 0340927856798933;
let unsafeMutableCopy = safeImmutableObject;

function buggyWebsite(safeImmutableObject, unsafeMutableCopy) {
  const sessionID = safeImmutableObject.sessionID;
  let userInputUserName, userInputPassword;

  userInputUserName = "l33tHaX0R@420.jm";
  userInputPassword = "*********";

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // you can only assign values to the binding below! Nothing else!
  unsafeMutableCopy = ;
  // you can only assign values to the binding above! Nothing else!
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

websiteServer(httpRequest);
