import { css } from "@emotion/css";
import styled from "styled-components";

import { ThemeProps } from "../../types/CommonTypes";

export const Toolbar = styled.div<ThemeProps>(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

export const item = css`
    margin-top: 5%;
`

export const emptyButton = css`
    min-width: 150px;
`
export const checkoutButton = css`
    min-width: 150px;
`

export const cartDetails = css`
    display: flex;
    margin-top: 10px;
    width: 100px;
    justify-content: space-between;
`