const StudentsFactory = (records) => {
    let rows = [];
    for (let i = 1; i <= records; i++) {
        let row = {
            userId: i + 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        rows.push(row);
    }
    return rows; 
};

module.exports = StudentsFactory;
