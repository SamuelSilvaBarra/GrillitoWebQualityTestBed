import Type  from "typebox";

const ScenarioNameSchema = Type.Union([
    Type.Literal("healthy"),
    Type.Literal("all-errors"),
    Type.Literal("all-fixtures"),
    Type.Literal("broken-media")
])

export const ScenarioParamsSchema = Type.Object({
    
    name: ScenarioNameSchema,

}, {
        additionalProperties: false,
    }
)

export type ScenarioParamsSchema = 
    Type.Static<typeof ScenarioParamsSchema>;