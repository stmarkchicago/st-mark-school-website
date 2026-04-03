"use client";
import React from "react";
import Heading from "./_Builtin/Heading";

export function H1(
    {
        as: _Component = Heading
    }
) {
    return <_Component tag="h1">{"H1"}</_Component>;
}