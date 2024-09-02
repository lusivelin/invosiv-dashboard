## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
# Project Folder Structure

```
src/
├── app/
├── components/
│   ├── elements/
│   │   └── **/*.(tsx|ts)
│   └── pages/
│       └── **/section-(one~ten)/*.(tsx|ts)
└── styles/
    └── *.(scss|css)
```


# Page sections

Every page section component have id according to the page
example id: (page)-section-(number)

Page Mapping Definition
(Will implement JSdoc on every components)

Home
- section-one => Banner
- section-two => Introduction Slider

Login
- section-one => Banner

# Q&A

Why not tailwind and css module ?
- Simple is the best.

Why don't you write test ?
- Typescript is poor man's test case.

So why use scss ?
- Want to use nesting that's all.