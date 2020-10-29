export interface UserAnswers {
    [key: number]: string
}

export interface UserAnswerWithNotes {
    questionNumber: 'string',
    selectedAnswer: 'string',
    notes: 'string'
}

export interface UserAnswerWithNotesData {
    answers: UserAnswerWithNotes[]
}