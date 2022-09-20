// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: f1ne6MHavnkqSCsUCdyQTF
// Component: gQkvUEZjQIStN
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 9iKKdEBBrUEl-/component
import Footer from "../../Footer"; // plasmic-import: 818xGXbf8YPnY/component

import { useScreenVariants as useScreenVariantsucUmrk61TLu2R } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ucUMRK61TLu2R/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_strat_website.module.css"; // plasmic-import: f1ne6MHavnkqSCsUCdyQTF/projectcss
import sty from "./PlasmicContact.module.css"; // plasmic-import: gQkvUEZjQIStN/css

export type PlasmicContact__VariantMembers = {};

export type PlasmicContact__VariantsArgs = {};
type VariantPropType = keyof PlasmicContact__VariantsArgs;
export const PlasmicContact__VariantProps = new Array<VariantPropType>();

export type PlasmicContact__ArgsType = {};
type ArgPropType = keyof PlasmicContact__ArgsType;
export const PlasmicContact__ArgProps = new Array<ArgPropType>();

export type PlasmicContact__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  freeBox?: p.Flex<"div">;
  section?: p.Flex<"section">;
  ul?: p.Flex<"ul">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultContactProps {
  className?: string;
}

function PlasmicContact__RenderFunc(props: {
  variants: PlasmicContact__VariantsArgs;
  args: PlasmicContact__ArgsType;
  overrides: PlasmicContact__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsucUmrk61TLu2R()
  });

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          {true ? (
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <p.Stack
                as={"section"}
                data-plasmic-name={"section"}
                data-plasmic-override={overrides.section}
                hasGap={true}
                className={classNames(projectcss.all, sty.section)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___8BlHw
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>
                      {"Contact me if you need to: \n\n"}
                    </React.Fragment>
                    {
                      <ul
                        data-plasmic-name={"ul"}
                        data-plasmic-override={overrides.ul}
                        className={classNames(
                          projectcss.all,
                          projectcss.ul,
                          sty.ul
                        )}
                      >
                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__kw4W
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ fontWeight: 700 }}
                            >
                              {"Audit"}
                            </span>
                            <React.Fragment>
                              {" the security of your smart contracts.\n"}
                            </React.Fragment>
                          </React.Fragment>
                        </li>

                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li___02Slk
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ fontWeight: 700 }}
                            >
                              {"Build "}
                            </span>
                            <React.Fragment>
                              {"a cool Web3 app (DeFi, DAO, NFT, ...) "}
                            </React.Fragment>
                          </React.Fragment>
                        </li>

                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__i2U3O
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ fontWeight: 700 }}
                            >
                              {"Train"}
                            </span>
                            <React.Fragment>
                              {
                                " your team on blockchain and decentralization.\n"
                              }
                            </React.Fragment>
                          </React.Fragment>
                        </li>

                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__n6Jrj
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ fontWeight: 700 }}
                            >
                              {"Present"}
                            </span>
                            <React.Fragment>
                              {" your project to crypto investors."}
                            </React.Fragment>
                          </React.Fragment>
                        </li>

                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__xmMZr
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ fontWeight: 700 }}
                            >
                              {"Design"}
                            </span>
                            <React.Fragment>
                              {" a relevant marketing strategy."}
                            </React.Fragment>
                          </React.Fragment>
                        </li>
                      </ul>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__aIpOg
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{"Schedule a call: "}</React.Fragment>
                    {
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__y1XUe
                        )}
                        href={
                          "https://meetings-eu1.hubspot.com/julien-beranger " as const
                        }
                      >
                        {"https://meetings-eu1.hubspot.com/julien-beranger"}
                      </a>
                    }
                    <React.Fragment>{"\nElement: "}</React.Fragment>
                    {
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__qOJso
                        )}
                        href={
                          "https://matrix.to/#/@julienbrg:matrix.org" as const
                        }
                        target={"_blank" as const}
                      >
                        {"https://matrix.to/#/@julienbrg:matrix.org"}
                      </a>
                    }
                    <React.Fragment>{"\nTelegram: "}</React.Fragment>
                    {
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link___6Ex4I
                        )}
                        href={"https://t.me/julienbrg" as const}
                        target={"_blank" as const}
                      >
                        {"https://t.me/julienbrg"}
                      </a>
                    }
                    <React.Fragment>{"\nLinkedIn: "}</React.Fragment>
                    {
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__waHv
                        )}
                        href={
                          "https://www.linkedin.com/in/julienberanger/" as const
                        }
                        target={"_blank" as const}
                      >
                        {"https://www.linkedin.com/in/julienberanger/"}
                      </a>
                    }
                    <React.Fragment>{"\nTwitter: "}</React.Fragment>
                    {
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__x3KQ3
                        )}
                        href={"https://twitter.com/julienbrg" as const}
                        target={"_blank" as const}
                      >
                        {"https://twitter.com/julienbrg"}
                      </a>
                    }
                    <React.Fragment>{"\nEmail: "}</React.Fragment>
                    {
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__i5Dx6
                        )}
                        href={"https://mailto:julien@strat.cc" as const}
                      >
                        {"julien@strat.cc"}
                      </a>
                    }
                    <React.Fragment>{"\nGithub: "}</React.Fragment>
                    {
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__jxGop
                        )}
                        href={"https://github.com/julienbrg" as const}
                        target={"_blank" as const}
                      >
                        {"https://github.com/julienbrg"}
                      </a>
                    }
                    <React.Fragment>{"\nFull bio: "}</React.Fragment>
                    {
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__x5Hb
                        )}
                        href={"https://julienberanger.com" as const}
                      >
                        {"julienberanger.com"}
                      </a>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </p.Stack>
            </div>
          ) : null}

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "freeBox", "section", "ul", "footer"],
  header: ["header"],
  freeBox: ["freeBox", "section", "ul"],
  section: ["section", "ul"],
  ul: ["ul"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  freeBox: "div";
  section: "section";
  ul: "ul";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContact__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContact__VariantsArgs;
    args?: PlasmicContact__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContact__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContact__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicContact__ArgProps,
          internalVariantPropNames: PlasmicContact__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicContact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContact";
  } else {
    func.displayName = `PlasmicContact.${nodeName}`;
  }
  return func;
}

export const PlasmicContact = Object.assign(
  // Top-level PlasmicContact renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    freeBox: makeNodeComponent("freeBox"),
    section: makeNodeComponent("section"),
    ul: makeNodeComponent("ul"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicContact
    internalVariantProps: PlasmicContact__VariantProps,
    internalArgProps: PlasmicContact__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContact;
/* prettier-ignore-end */
