module.exports = function(user, table) {
    return {
        from: 'Monitoria IP <monitoriaipccufpe@gmail.com>',
        to : user.username + "@cin.ufpe.br",
        subject: "Register Confirmation",
        html: table
    }
}