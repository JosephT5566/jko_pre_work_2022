import React from "react"
import { styled } from "@material-ui/core/styles"

const StyledPageContainer = styled("div")({
    padding: "1.5rem",
})

export function PageContainer(props: { children: React.ReactNode }) {
    const { children } = props

    return <StyledPageContainer>{children}</StyledPageContainer>
}
