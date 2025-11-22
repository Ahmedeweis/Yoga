// src/store/game.js
import { defineStore } from 'pinia'
import questions from '@/assets/data/questions.json'
export const useGameStore = defineStore('game', {
    state: () => ({
        questionsData: questions,
        selectedCategoryId: null,
        currentScenarioIndex: 0,
        score: 0,
        roundsToPlay: 5, // قابل للتعديل حسب التصميم أو الملف المرسل منك
        showComments: false
    }),
    getters: {
        selectedCategory(state) {
            return state.questionsData.find(c => c.id === state.selectedCategoryId)
        },
        currentScenario(state) {
            const cat = state.questionsData.find(c => c.id === state.selectedCategoryId)
            if (!cat) return null
            return cat.scenarios[state.currentScenarioIndex] ?? null
        }
    },
    actions: {
        selectCategory(id) {
            this.selectedCategoryId = id
            this.currentScenarioIndex = 0
            this.score = 0
        },
        answerChoice(choice) {
            this.score += choice.impact
            this.showComments = true
        },
        nextScenario() {
            this.showComments = false
            this.currentScenarioIndex++
        },
        resetGame() {
            this.selectedCategoryId = null
            this.currentScenarioIndex = 0
            this.score = 0
            this.showComments = false
        }
    }
})
