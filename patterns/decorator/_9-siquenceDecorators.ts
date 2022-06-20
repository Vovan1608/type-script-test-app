function Uni(name: string): any {
    console.log(`Initializing ${name}`);

    return () => {
        console.log(`Calling ${name}`);
    }
};

@Uni('Class')
class MyCkass {

    @Uni('Property')
    prop?: any;

    @Uni('Property static')
    static prop2: any;

    @Uni("Method")
    getAny(@Uni('Parameter of method') _: any) {}

    @Uni("Method static")
    getAny2(@Uni('Parameter of static method') _: any) {}

    constructor(@Uni('Parameter of construcnor') _: any) {}
}
