"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const pets_1 = require("../models/pets");
const createMenuObject_1 = require("../helpers/createMenuObject");
const search = (req, res) => {
    let query = req.query.q;
    if (!query) {
        res.redirect('/');
        return;
    }
    let list = pets_1.Pet.getFromName(query);
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)(''),
        list,
        query
    });
};
exports.search = search;
