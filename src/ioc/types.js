export const TYPES = {
    /**
        Gateways
     */
    StudentGateway: Symbol.for("student-gateway"),
    LoginGateway: Symbol.for("login-gateway"),

    /**
        Repositories
     */
    StudentRepository: Symbol.for('student-repository'),
    LoginRepository: Symbol.for('login-repository'),

    /**
        Presenters
     */
    StudentPresenter: Symbol.for('student-presenter'),
    EditStudentPresenter: Symbol.for('edit-student-presenter'),
    DeleteStudentPresenter: Symbol.for('delete-student-presenter'),
    LoginPresenter: Symbol.for('login-presenter'),
    AppPresenter: Symbol.for('app-presenter'),
    HeaderPresenter: Symbol.for('header-presenter'),

    /**
     * Models
     */
    StudentModel: Symbol.for('student-model'),
}