# Concept Content Guidelines

## YAML Schema

Every YAML file must contain these fields (all required):

```yaml
title: "Variables"      # Concept name, must be identical across all language files for the same concept
order: 1                # Global sort order
sections:               # Array of code sections — IDs must match across all languages
  - id: declaration
    code: |
      ...
  - id: constants
    code: |
      ...
explanation: |          # Concept explanation text
  ...
```

The schema is defined in `src/content/config.ts` and validated by Zod.

## Directory Structure

```
src/content/concepts/{category}/{concept}/{language}.yaml
```

- **category**: Top-level grouping — `basics`, `control-flow`, `data-structures`, `functions-org`, `types-objects`, `advanced`
- **concept**: Individual topic — `variables`, `loops`, `async`, etc.
- **language**: The filename (without `.yaml`) is the language identifier — `javascript.yaml`, `python.yaml`, etc.

### Currently Supported Languages

typescript, python, go, rust, cpp, java

When adding a new language, you must create a matching YAML file for every existing concept.

### Adding a New Concept

Create a concept subdirectory under the appropriate category and add one YAML file per language. The `title` and `order` values must be identical across all language files.

## Order Numbering Convention

`order` is a global sort number. Values are grouped by tens with gaps for future insertion:

| Range | Category | Examples |
|-------|----------|----------|
| 1–9 | basics | variables(1), data-types(2), operators(3), strings(4) |
| 10–19 | control-flow | conditionals(10), loops(11) |
| 20–29 | functions-org | functions(20), closures(21), modules(22) |
| 30–39 | data-structures | arrays(30), maps(31) |
| 40–49 | types-objects | structs(40) |
| 60+ | advanced | async(60) |

## Code Example Requirements

1. **Use structured sections**: Each file has a `sections` array. Section IDs must be identical across all language files for the same concept, in the same order.
2. **Keep sections focused**: Each section should cover one sub-topic (e.g., `declaration`, `type-checking`, `conversion`).
3. **Cover practical scenarios**: Include 3–5 sections per file showing common usage, not just bare syntax.
4. **Cross-language alignment**: All 6 language files for a concept must have the exact same section IDs. `ConceptBlock` matches sections by ID for side-by-side rendering.
5. **Keep it runnable**: Code should be directly executable where possible — avoid external dependencies or excessive boilerplate.

## Explanation Requirements

1. **Be concise**: 1–3 sentences summarizing how the language handles the concept.
2. **Highlight differences**: Call out key distinctions from other languages to support LangBridge's comparative learning goal.
3. **Point out pitfalls**: Mention common mistakes or counter-intuitive behavior.
4. **Don't repeat the code**: Explanations should provide context that the code alone cannot convey.
