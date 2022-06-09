// FUNCTION
// const getFullName = (userEntity: { firstName: string, lastName: string}): string => {
//     return `${userEntity.firstName} ${userEntity.lastName}`;
// };

// const user = {
//     firstName: 'Bob',
//     lastName: 'Diul',
//     age: 25,
//     city: 'N'
// };

// const res = getFullName(user);

// console.log(res);

// FIXME: ARRAY
// const skills: string[] = ['dev', 'devOps', 'testing'];

// for(const skill of skills) {
//     console.log(skill.toUpperCase());  
// }

// const newArr = skills
//                 .filter(skill => skill !== 'devOps')
//                 .map(skill => 1)
//                 .reduce((cur, next) => cur + next);

// console.log(newArr);


// TODO: TUPLES
// const skills: [number, string] = [1, 'devOps'];
// const id = skills[0];
// const skillName = skills[1];

// skills.push(2);
// // skills.push(false);
// // const some = skills[2];

// const newSkill: [number, string, ...boolean[]] = [1, 'dev'];


// TODO: READONLY
// const someArr: readonly [number, string] = [1, 'dev'];
// // someArr[0] = 5;

// const someElseArr: ReadonlyArray<string> = ['Dev', 'DevOps'];

// someElseArr.push('njutd');

// TODO: ENUMS
enum statusCode {
    SUCCESS = 's',
    IN_PROGRESS = 'p',
    FAILED = 'f'
}

const response = {
    message: 'Pay is successed',
    statusCode: 's'
};

// if (response.statusCode === statusCode.SUCCESS) {}

enum SomeEnum {
    FIRST = 25,
    SECOND = FIRST + 10,
}

// console.log(SomeEnum.SECOND);

const compute = (num: number): number => num * 12;

enum SomethingElse {
    ONE = 3,
    TWO = compute(ONE),
}

// console.log(SomethingElse.TWO);

const enum Roles {
    ADMIN = 1,
    USER = 2
}

console.log(Roles.USER);
