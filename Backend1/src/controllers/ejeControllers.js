import { response } from "../helpers/Response.js";

let data = [{
        id: 1,
        name: "Michelle",
        lastname: "Mejía Parra",
        age: 18,
    },
    {
        id: 2,
        name: "Dana",
        lastname: "Parra",
        age: 17,
    },
    {
        id: 3,
        name: "Luisa",
        lastname: "Morales",
        age: 18,
    },
];

const usertCtrl = {}

usertCtrl.getData = (req, res) => {
    try {
        response(res, 200, true, data, "Lista de usuarios");
    } catch (error) {
        response(res, 500, false, "", error.message);
    }
};

usertCtrl.getDataByid = (req, res) => {
    try {
        const { id } = req.params;
        const user = data.filter((item) => item._id === id);
        if (!user) {
            return response(res, 404, false, "", "Usuario no encontrado");
        }

        response(res, 200, true, user, "test");
    } catch (error) {
        response(res, 500, false, "", error.message);
    }
};

usertCtrl.saveData = (req, res) => {
    try {
        const { _id, name, lastname, age } = req.body;
        data.push({ _id, name, lastname, age: parseInt(age) });
        response(
            res,
            201,
            true, {
                name,
                lastname,
                age,
            },
            "Registro guardado"
        );
    } catch (error) {
        response(res, 500, false, "", error.message);
    }
};

usertCtrl.actualizar = (req, res) => {
    try {
        const { id } = req.params;
        // const { _id, name, lastname, age } = req.body;
        const newData = data.map((item) =>
            item._id === id ? {...req.body, age: parseInt(req.body.age) } : item
        );

        data = newData;

        response(res, 200, true, id, "Usuario actualizado");
    } catch (error) {
        response(res, 500, false, "", error.message);
    }
};

usertCtrl.eliminar = (req, res) => {
    try {
        const { id } = req.params;
        const newData = data.filter((item) => item._id !== id);
        data = newData;

        response(res, 200, true, id, "Usuario eliminado");
    } catch (error) {
        response(res, 500, false, "", error.message);
    }
};

export default usertCtrl;