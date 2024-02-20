import { AndamioConfig, CourseManagementConfig, ProjectManagementConfig } from "@andamiojs/core";

// Project Management
import treasury from "../cardano/plutus/treasury.json"
import contributorReference from "../cardano/plutus/contributorReference.json"
import contributorMintingReference from "../cardano/plutus/contributorMintingReference.json"
import contractTokenMintingReference from "../cardano/plutus/contractTokenMintingReference.json"
import escrowReviewer1 from "../cardano/plutus/escrowReviewer1.json"


// Course Management
import assignment from "../cardano/plutus/assignment.json"
import courseReference from "../cardano/plutus/courseReference.json"
import learnerReference from "../cardano/plutus/learnerReference.json"
import learnerMintingReference from "../cardano/plutus/learnerMintingReference.json"
import moduleMintingReference from "../cardano/plutus/moduleMintingReference.json"

// Tokens
import courseManagementTokens from './courseManagementTokens.json'
import projectManagementTokens from './projectManagementTokens.json'


export const andamioConfig: AndamioConfig<CourseManagementConfig & ProjectManagementConfig> = {

  title: "Mesh PBL",
  baseAddress: "",
  enterpriseAddress: "",
  rewardAddress: "",
  // at the moment, each contract has a different reference UTxO Address - see individual contract configs
  // referenceScriptAddress: '',
  metadataKey: "",
  network: "1",
  config: {
    assignment: assignment,
    courseReference: courseReference,
    learnerReference: learnerReference,
    learnerMintingReference: learnerMintingReference,
    moduleMintingReference: moduleMintingReference,
    courseManagementTokens: courseManagementTokens,
    coursemanagementNftArtwork: {
      learnerNFTURL: "ipfs://bafkreidqvxwum45zykyxnkcngdpasvcjwsawmevurd2yzrlziiaukhjdje",
      courseModuleNFTURL: "https://www.andamio.io/andamio.png",
      courseCreatorNFTURL: "ipfs://bafkreidly4pye2wiklnxohb76bxeewde3xa66mwms5a7saienzzcccx3wi",
      courseDeciderNFTURL: "ipfs://bafkreiasvwd3fcmrqpc5mmjhci2rmjg5hptgs46nf7xmmmhv7oz66xkfmu",
    },
    contributorReference: contributorReference,
    escrows: [escrowReviewer1],
    treasury: treasury,
    contractTokenMintingReference: contractTokenMintingReference,
    contributorMintingReference: contributorMintingReference,
    projectManagementTokens: projectManagementTokens,
  },
};
