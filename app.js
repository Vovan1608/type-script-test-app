"use strict";
const getFullName = (userEntity) => {
    return `${userEntity.firstName} ${userEntity.lastName}`;
};
const user = {
    firstName: 'Bob',
    lastName: 'Diul',
    age: 25,
    city: 'N'
};
const res = getFullName(user);
console.log(res);
