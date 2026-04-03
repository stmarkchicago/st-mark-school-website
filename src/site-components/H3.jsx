"use client";
import React from "react";
import Heading from "./_Builtin/Heading";

export function H3(
    {
        as: _Component = Heading,
        title = "H3"
    }
) {
    return <_Component tag="h3">{title}</_Component>;
}