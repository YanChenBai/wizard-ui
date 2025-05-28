import { Project, VariableDeclarationKind, ScriptTarget } from 'ts-morph'
export function objToCode(obj: Record<string, any>, exportName: string) {
    const project = new Project({
    compilerOptions: {
      target: ScriptTarget.ESNext,
      removeComments: false,
      declaration: true,
    },
  })
  
  const sourceFile = project.createSourceFile('tmp.ts', '', { overwrite: true })

  sourceFile.addVariableStatement({
    isExported: true,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: exportName,
        initializer: (writer) => {
          writer.write(`${JSON.stringify(obj, null, 2)} as const`)
        },
      },
    ],
  })

  const files = sourceFile.getEmitOutput().getOutputFiles()

  const code = files.find(file => file.getFilePath().endsWith('.js'))?.getText()
  const dts = files.find(file => file.getFilePath().endsWith('.d.ts'))?.getText()
  if (!code || !dts) {
    throw new Error('Failed to generate code')
  }

  return {
    code,
    dts,
  }
}
