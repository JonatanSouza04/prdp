"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }


class LoginController {
   async login (req, res, next)  {
    try {
      const [typeAuth, hash] = req.headers.authorization.split(' ')
      const [userLogin, passwordLogin] = Buffer.from(hash, 'base64').toString().split(':')

      /* const validLogin = await db.raw(SQLVALID, ['', userLogin, 1, passwordLogin, '', '4.4.4.4'])

      if (validLogin.length !== undefined && validLogin.length > 0) {
        if (validLogin[0].status >= 200 && validLogin[0].status <= 299) {
          let user = await db('Jurid_Sistema').select('codigo', 'nome', 'id_usuario').where('codigo', userLogin)

          if (user.length > 0) {
            const token = jwt.sign({ user: user[0].codigo })

            const ip = req.header('x-forwarded-for') || req.connection.remoteAddress

            await db('Jurid_Token')
              .returning('T_Id')
              .insert({
                S_Id: user[0].id_usuario,
                Dispositivo: 'WebNode',
                Status: 1,
                IP: ip,
                Token: token,
                DataLogin: db.raw('GETDATE()'),
                DataExpiracao: db.raw('GETDATE() + 1')
              })

            delete user[0].id_usuario

            user = user[0]

            // Cache.set('key:user' + btoa(user.Codigo),JSON.stringify(user));

            return res.status(200).send({ user, token })
          }
        }
      }
       */
      return res.status(403).send({ msg: 'Sem permissão', status: 403 })
    } catch (error) {
      next(error)
    }
  }
}

exports. default = new LoginController()
