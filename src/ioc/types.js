export const TYPES = {
    /**
        Gateways
     */
    StudentGateway: Symbol.for("student-gateway"),

    /**
        Repositories
     */
    StudentRepository: Symbol.for('student-repository'),

    /**
        Presenters
     */
    StudentPresenter: Symbol.for('student-presenter'),
    EditStudentPresenter: Symbol.for('edit-student-presenter'),
    DeleteStudentPresenter: Symbol.for('delete-student-presenter'),

    /**
     * Models
     */
    StudentModel: Symbol.for('student-model'),
}