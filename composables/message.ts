export const useMessage = () => {
    return useState<string[]>('message', () => [])
}