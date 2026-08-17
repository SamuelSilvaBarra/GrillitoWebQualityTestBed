import Type  from "typebox";

const LinkVariantSchema = Type.Union([
    Type.Literal("working"),
    Type.Literal("broken"),
    Type.Literal("redirect"),
])

const SpellingVariantSchema = Type.Union([
    Type.Literal("correct"),
    Type.Literal("incorrect"),    
])

const ImageVariantSchema = Type.Union([
    Type.Literal("working"),
    Type.Literal("missing"),
])

const PdfVariantSchema = Type.Union([
    Type.Literal("valid"),
    Type.Literal("missing"),
])

const VideoVariantSchema = Type.Union([
    Type.Literal("working"),
    Type.Literal("missing"),
])

export const ScenarioQuerySchema = Type.Object({
    
    links: Type.Optional(
        Type.Array(LinkVariantSchema)
    ),

    spelling: Type.Optional(
        Type.Array(SpellingVariantSchema)
    ),

    images: Type.Optional(
        Type.Array(ImageVariantSchema)
    ),

    pdfs: Type.Optional(
        Type.Array(PdfVariantSchema)
    ),
    
    videos: Type.Optional(
        Type.Array(VideoVariantSchema)
    ),
}, {
        additionalProperties: false,
    }
)

export type ScenarioQuery = 
    Type.Static<typeof ScenarioQuerySchema>;