const logout = document.getElementsByClassName("logout");

logout[0].addEventListener("click", function delete_cookie() {
    console.log(document.cookie);
    document.cookie = 'token' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
});